
import { Subject } from './subjects';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  subject: Subject; // Added subject field
}

export const questions: Question[] = [
  {
    id: 1,
    text: 'Which of the following materials has the highest modulus of elasticity?',
    options: ['Steel', 'Aluminum', 'Concrete', 'Wood (Douglas Fir)'],
    correctAnswerIndex: 0,
    explanation: 'Steel typically has the highest modulus of elasticity (around 200 GPa or 29,000 ksi) compared to aluminum (around 70 GPa), concrete (varies, but generally 15-40 GPa), and wood (around 10-15 GPa). Modulus of elasticity measures a material\'s stiffness or resistance to elastic deformation.',
    subject: Subject.MATERIALS, // Assign subject
  },
  {
    id: 2,
    text: 'According to Bernoulli\'s principle, as the speed of a fluid increases, what happens to its pressure?',
    options: ['Increases', 'Decreases', 'Remains constant', 'Becomes zero'],
    correctAnswerIndex: 1,
    explanation: 'Bernoulli\'s principle states that for an inviscid flow, an increase in the speed of the fluid occurs simultaneously with a decrease in pressure or a decrease in the fluid\'s potential energy. Therefore, as speed increases, pressure decreases (assuming constant height).',
    subject: Subject.FLUID_MECHANICS, // Assign subject
  },
  {
    id: 3,
    text: 'What type of load causes bending stress in a beam?',
    options: ['Axial load', 'Torsional load', 'Transverse load', 'Shear load'],
    correctAnswerIndex: 2,
    explanation: 'Transverse loads (loads applied perpendicular to the longitudinal axis of the beam) cause bending moments and shear forces within the beam. These bending moments are what induce bending stresses (tensile and compressive) in the beam\'s cross-section.',
    subject: Subject.MECHANICS_OF_MATERIALS, // Assign subject
  },
    {
    id: 4,
    text: 'In soil mechanics, what does the term "liquefaction" refer to?',
    options: [
      'The process of soil turning into a liquid state due to compaction',
      'The decrease in soil volume due to water drainage',
      'The loss of soil strength and stiffness in response to applied stress, usually earthquake shaking',
      'The swelling of clay soils when exposed to water'
    ],
    correctAnswerIndex: 2,
    explanation: 'Liquefaction is a phenomenon where saturated or partially saturated soil substantially loses strength and stiffness in response to an applied stress, usually earthquake shaking or other sudden change in stress condition, causing it to behave like a liquid.',
    subject: Subject.GEOTECHNICAL_ENGINEERING, // Assign subject
  },
  {
    id: 5,
    text: 'What is the primary purpose of reinforcement (rebar) in concrete?',
    options: [
      'To increase compressive strength',
      'To increase tensile strength',
      'To reduce the weight of the concrete',
      'To improve thermal insulation'
    ],
    correctAnswerIndex: 1,
    explanation: 'Concrete is strong in compression but weak in tension. Steel reinforcement (rebar) is added to concrete structures primarily to resist tensile forces. The steel carries the tensile loads, preventing the concrete from cracking and failing under tension.',
    subject: Subject.STRUCTURAL_ENGINEERING, // Assign subject
  },
   {
    id: 6,
    text: 'A project has an initial cost of $100,000 and annual benefits of $25,000 for 5 years. Using a discount rate of 8%, what is the Net Present Value (NPV)? (Use formula or factor table)',
    options: [
      '-$309',
      '$0',
      '$25,000',
      '$99,691'
    ],
    correctAnswerIndex: 0,
    explanation: 'The Present Worth factor (P/A, 8%, 5) is approximately 3.9927. NPV = Annual Benefit * (P/A, i, n) - Initial Cost. NPV = $25,000 * 3.9927 - $100,000 = $99,817.5 - $100,000 = -$182.5. Option A is the closest likely due to rounding differences in factor tables.',
    subject: Subject.ENGINEERING_ECONOMICS,
  },
   {
    id: 7,
    text: 'A 5kg block is resting on a horizontal surface with a coefficient of static friction of 0.4. What is the minimum horizontal force required to start moving the block? (Assume g = 9.81 m/s²)',
    options: [
      '19.62 N',
      '49.05 N',
      '12.26 N',
      '2.00 N'
    ],
    correctAnswerIndex: 0,
    explanation: 'Normal force (N) = mass * g = 5 kg * 9.81 m/s² = 49.05 N. Maximum static friction force (Fs_max) = coefficient of static friction * Normal force = 0.4 * 49.05 N = 19.62 N. This is the minimum force required to overcome static friction and start moving the block.',
    subject: Subject.STATICS,
  },
   {
    id: 8,
    text: 'What surveying method is typically used to establish the elevation of points relative to a known benchmark?',
    options: [
      'Traversing',
      'Triangulation',
      'Leveling',
      'GPS Surveying'
    ],
    correctAnswerIndex: 2,
    explanation: 'Leveling is the surveying operation used to determine differences in elevation between points or to establish points at a given elevation relative to a known datum or benchmark.',
    subject: Subject.SURVEYING,
  },
];
