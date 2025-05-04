
export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: 'Which of the following materials has the highest modulus of elasticity?',
    options: ['Steel', 'Aluminum', 'Concrete', 'Wood (Douglas Fir)'],
    correctAnswerIndex: 0,
    explanation: 'Steel typically has the highest modulus of elasticity (around 200 GPa or 29,000 ksi) compared to aluminum (around 70 GPa), concrete (varies, but generally 15-40 GPa), and wood (around 10-15 GPa). Modulus of elasticity measures a material\'s stiffness or resistance to elastic deformation.',
  },
  {
    id: 2,
    text: 'According to Bernoulli\'s principle, as the speed of a fluid increases, what happens to its pressure?',
    options: ['Increases', 'Decreases', 'Remains constant', 'Becomes zero'],
    correctAnswerIndex: 1,
    explanation: 'Bernoulli\'s principle states that for an inviscid flow, an increase in the speed of the fluid occurs simultaneously with a decrease in pressure or a decrease in the fluid\'s potential energy. Therefore, as speed increases, pressure decreases (assuming constant height).',
  },
  {
    id: 3,
    text: 'What type of load causes bending stress in a beam?',
    options: ['Axial load', 'Torsional load', 'Transverse load', 'Shear load'],
    correctAnswerIndex: 2,
    explanation: 'Transverse loads (loads applied perpendicular to the longitudinal axis of the beam) cause bending moments and shear forces within the beam. These bending moments are what induce bending stresses (tensile and compressive) in the beam\'s cross-section.',
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
  },
];
