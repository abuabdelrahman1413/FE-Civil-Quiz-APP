
/**
 * @fileOverview Defines the subject areas covered in the NCEES FE Civil exam.
 */
import type { LucideIcon } from 'lucide-react';
import {
    Calculator, Scale, Landmark, Baseline, Activity, Layers, BrickWall, Waves, MapPin, Recycle, Building, Mountain, Truck, Construction, FileText // Added FileText as default
} from 'lucide-react';


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

// Remove ALL_SUBJECTS constant
// export const ALL_SUBJECTS = 'All Subjects';

// Update subjectList to only contain specific subjects
export const subjectList: string[] = [
  ...Object.values(Subject),
];


// Map subjects to Lucide icons
const subjectIconMap: Record<Subject, LucideIcon> = {
  [Subject.MATHEMATICS_AND_STATISTICS]: Calculator,
  [Subject.ETHICS_AND_PROFESSIONAL_PRACTICE]: Scale,
  [Subject.ENGINEERING_ECONOMICS]: Landmark,
  [Subject.STATICS]: Baseline,
  [Subject.DYNAMICS]: Activity,
  [Subject.MECHANICS_OF_MATERIALS]: Layers, // Using Layers for Mechanics of Materials
  [Subject.MATERIALS]: BrickWall,
  [Subject.FLUID_MECHANICS]: Waves,
  [Subject.SURVEYING]: MapPin,
  [Subject.WATER_RESOURCES_AND_ENVIRONMENTAL]: Recycle,
  [Subject.STRUCTURAL_ENGINEERING]: Building,
  [Subject.GEOTECHNICAL_ENGINEERING]: Mountain,
  [Subject.TRANSPORTATION_ENGINEERING]: Truck,
  [Subject.CONSTRUCTION_ENGINEERING]: Construction,
};

// Function to get the icon for a subject
export function getSubjectIcon(subject: Subject): LucideIcon {
  return subjectIconMap[subject] || FileText; // Return FileText as a default icon
}
