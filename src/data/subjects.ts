/**
 * @fileOverview Defines the subject areas covered in the NCEES FE Civil exam.
 */

export enum Subject {
  MATHEMATICS_AND_STATISTICS = 'Mathematics and Statistics',
  ETHICS_AND_PROFESSIONAL_PRACTICE = 'Ethics and Professional Practice',
  ENGINEERING_ECONOMICS = 'Engineering Economics',
  STATICS = 'Statics',
  DYNAMICS = 'Dynamics',
  MECHANICS_OF_MATERIALS = 'Mechanics of Materials',
  MATERIALS = 'Materials',
  FLUID_MECHANICS = 'Fluid Mechanics',
  SURVEYING = 'Surveying',
  WATER_RESOURCES_AND_ENVIRONMENTAL = 'Water Resources and Environmental Engineering',
  STRUCTURAL_ENGINEERING = 'Structural Engineering',
  GEOTECHNICAL_ENGINEERING = 'Geotechnical Engineering',
  TRANSPORTATION_ENGINEERING = 'Transportation Engineering',
  CONSTRUCTION_ENGINEERING = 'Construction Engineering',
}

export const ALL_SUBJECTS = 'All Subjects';

export const subjectList: string[] = [
  ALL_SUBJECTS,
  ...Object.values(Subject),
];
