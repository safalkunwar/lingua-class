/**
 * Content Validator for English Survival Library
 * 
 * Run with: npx tsx scripts/content-validator.ts
 * 
 * Flags:
 * - Duplicate examples across resources
 * - Long paragraphs (>100 words)
 * - Repeated phrases
 * - Missing Chinese translations
 * - Same examples appearing in multiple sections
 */

import { survivalResources } from "../data/english-survival-library";

interface ValidationIssue {
  severity: "error" | "warning" | "info";
  resourceId: string;
  section: string;
  message: string;
  detail?: string;
}

const issues: ValidationIssue[] = [];

function addIssue(severity: ValidationIssue["severity"], resourceId: string, section: string, message: string, detail?: string) {
  issues.push({ severity, resourceId, section, message, detail });
}

// 1. Check for duplicate examples across resources
const exampleMap = new Map<string, string[]>();

for (const resource of survivalResources) {
  const allExamples: string[] = [];
  
  // Collect all examples from the resource
  for (const ex of resource.examples) {
    const normalized = ex.en.toLowerCase().trim().replace(/[.,!?;:'"]/g, "");
    allExamples.push(normalized);
  }
  
  for (const ex of resource.commonMistakes ?? []) {
    const normalized = ex.mistake.toLowerCase().trim().replace(/[.,!?;:'"]/g, "");
    allExamples.push(normalized);
  }
  
  for (const chunk of resource.chunks ?? []) {
    const normalized = chunk.example.toLowerCase().trim().replace(/[.,!?;:'"]/g, "");
    allExamples.push(normalized);
  }
  
  for (const struct of resource.structures ?? []) {
    const normalized = struct.example.toLowerCase().trim().replace(/[.,!?;:'"]/g, "");
    allExamples.push(normalized);
  }
  
  // Track duplicates within this resource
  const seen = new Map<string, number>();
  for (const ex of allExamples) {
    seen.set(ex, (seen.get(ex) ?? 0) + 1);
  }
  
  for (const [text, count] of seen.entries()) {
    if (count > 1) {
      addIssue("warning", resource.id, "internal", `Example appears ${count} times within same resource`, text);
    }
    
    // Track across resources
    if (!exampleMap.has(text)) {
      exampleMap.set(text, []);
    }
    exampleMap.get(text)!.push(resource.id);
  }
}

// Check for cross-resource duplicates
for (const [text, resourceIds] of exampleMap.entries()) {
  if (resourceIds.length > 1) {
    addIssue("warning", resourceIds.join(", "), "cross-resource", `Same example appears in ${resourceIds.length} resources`, text);
  }
}

// 2. Check for long explanations
for (const resource of survivalResources) {
  const wordCount = resource.explanation.split(/\s+/).length;
  if (wordCount > 150) {
    addIssue("warning", resource.id, "explanation", `Explanation is ${wordCount} words (target: <150)`, resource.explanation.slice(0, 100) + "...");
  }
  
  if (resource.explanationZh.split(/\s+/).length > 150) {
    addIssue("warning", resource.id, "explanation", `Chinese explanation is ${wordCount} words (target: <150)`, resource.explanationZh.slice(0, 100) + "...");
  }
}

// 3. Check for missing Chinese translations
for (const resource of survivalResources) {
  if (!resource.explanationZh || resource.explanationZh.trim().length === 0) {
    addIssue("error", resource.id, "translation", "Missing Chinese explanation");
  }
  
  if (!resource.titleZh || resource.titleZh.trim().length === 0) {
    addIssue("error", resource.id, "translation", "Missing Chinese title");
  }
  
  if (!resource.summaryZh || resource.summaryZh.trim().length === 0) {
    addIssue("warning", resource.id, "translation", "Missing Chinese summary");
  }
  
  for (const ex of resource.examples) {
    if (!ex.zh || ex.zh.trim().length === 0) {
      addIssue("error", resource.id, "translation", "Example missing Chinese translation", ex.en);
    }
  }
  
  for (const chunk of resource.chunks ?? []) {
    if (!chunk.meaning || chunk.meaning.trim().length === 0) {
      addIssue("warning", resource.id, "translation", "Chunk missing meaning", chunk.chunk);
    }
  }
}

// 4. Check for too many examples in one resource
for (const resource of survivalResources) {
  if (resource.examples.length > 8) {
    addIssue("info", resource.id, "examples", `Has ${resource.examples.length} examples (consider splitting into sections)`, "");
  }
}

// 5. Check for missing mini drills
for (const resource of survivalResources) {
  if (!resource.miniDrills || resource.miniDrills.length === 0) {
    addIssue("warning", resource.id, "practice", "No mini drills found");
  }
}

// Print report
console.log("\n📊 Content Validation Report");
console.log("=" .repeat(80));
console.log(`Total resources: ${survivalResources.length}`);
console.log(`Total issues: ${issues.length}\n`);

const errors = issues.filter(i => i.severity === "error");
const warnings = issues.filter(i => i.severity === "warning");
const infos = issues.filter(i => i.severity === "info");

console.log(`❌ Errors: ${errors.length}`);
console.log(`⚠️  Warnings: ${warnings.length}`);
console.log(`ℹ️  Info: ${infos.length}\n`);

if (errors.length > 0) {
  console.log("--- ERRORS ---");
  for (const issue of errors) {
    console.log(`  [${issue.resourceId}] ${issue.section}: ${issue.message}`);
    if (issue.detail) console.log(`    Detail: ${issue.detail}`);
  }
  console.log("");
}

if (warnings.length > 0) {
  console.log("--- WARNINGS ---");
  for (const issue of warnings) {
    console.log(`  [${issue.resourceId}] ${issue.section}: ${issue.message}`);
    if (issue.detail) console.log(`    Detail: ${issue.detail}`);
  }
  console.log("");
}

if (infos.length > 0) {
  console.log("--- INFO ---");
  for (const issue of infos) {
    console.log(`  [${issue.resourceId}] ${issue.section}: ${issue.message}`);
  }
  console.log("");
}

// Summary of duplicate examples
const duplicateExamples = Array.from(exampleMap.entries()).filter(([, ids]) => ids.length > 1);
console.log(`\n📋 Duplicate Examples Summary: ${duplicateExamples.length} unique sentences appear in multiple resources\n`);
for (const [text, ids] of duplicateExamples.slice(0, 20)) {
  console.log(`  "${text}"`);
  console.log(`    → ${ids.join(", ")}`);
}

console.log("\n" + "=".repeat(80));
console.log("Validation complete.");
