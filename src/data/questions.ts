
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
      '-$183',
      '$0',
      '$25,000',
      '$99,817'
    ],
    correctAnswerIndex: 0,
    explanation: 'The Present Worth factor (P/A, 8%, 5) is approximately 3.9927. NPV = Annual Benefit * (P/A, i, n) - Initial Cost. NPV = $25,000 * 3.9927 - $100,000 = $99,817.50 - $100,000 = -$182.50. Closest option is -$183.',
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
  // Start of added questions
  {
    id: 9,
    text: 'Calculate the derivative of f(x) = 3x³ - 5x² + 2x - 1.',
    options: ['9x² - 10x + 2', '3x² - 5x + 2', '9x³ - 10x² + 2', '6x² - 10x + 2'],
    correctAnswerIndex: 0,
    explanation: 'Using the power rule for differentiation (d/dx(xⁿ) = nxⁿ⁻¹), the derivative is (3 * 3x³⁻¹) - (5 * 2x²⁻¹) + (2 * 1x¹⁻¹) - 0 = 9x² - 10x + 2.',
    subject: Subject.MATHEMATICS_AND_STATISTICS,
  },
  {
    id: 10,
    text: 'Which code of ethics is primarily referenced by NCEES for professional engineering practice?',
    options: ['ASCE Code of Ethics', 'NSPE Code of Ethics', 'IEEE Code of Ethics', 'AICHE Code of Ethics'],
    correctAnswerIndex: 1,
    explanation: 'The National Society of Professional Engineers (NSPE) Code of Ethics is widely recognized and often referenced by licensing boards and NCEES as a fundamental guide for ethical engineering conduct.',
    subject: Subject.ETHICS_AND_PROFESSIONAL_PRACTICE,
  },
  {
    id: 11,
    text: 'What does the term "salvage value" mean in engineering economics?',
    options: ['The initial cost of an asset', 'The operating cost of an asset', 'The estimated resale value of an asset at the end of its useful life', 'The total depreciation of an asset'],
    correctAnswerIndex: 2,
    explanation: 'Salvage value is the estimated value that an asset will have at the end of its useful life. It is used in calculations like depreciation and economic analysis.',
    subject: Subject.ENGINEERING_ECONOMICS,
  },
  {
    id: 12,
    text: 'For a simply supported beam with a uniformly distributed load (w) over its entire length (L), what is the maximum bending moment?',
    options: ['wL²/2', 'wL²/4', 'wL²/8', 'wL²/12'],
    correctAnswerIndex: 2,
    explanation: 'The maximum bending moment for a simply supported beam under a uniformly distributed load occurs at the center of the span and is equal to wL²/8.',
    subject: Subject.STATICS,
  },
  {
    id: 13,
    text: 'A particle moves along a straight line with velocity v(t) = 3t² - 2t + 1 m/s. What is its acceleration at t = 2 seconds?',
    options: ['6 m/s²', '9 m/s²', '10 m/s²', '12 m/s²'],
    correctAnswerIndex: 2,
    explanation: 'Acceleration is the derivative of velocity with respect to time. a(t) = dv/dt = d/dt(3t² - 2t + 1) = 6t - 2. At t = 2s, a(2) = 6(2) - 2 = 12 - 2 = 10 m/s².',
    subject: Subject.DYNAMICS,
  },
  {
    id: 14,
    text: 'What is Poisson\'s ratio?',
    options: ['Ratio of axial stress to axial strain', 'Ratio of shear stress to shear strain', 'Ratio of lateral strain to axial strain', 'Ratio of tensile strength to compressive strength'],
    correctAnswerIndex: 2,
    explanation: 'Poisson\'s ratio (ν) is a measure of the Poisson effect, the phenomenon where a material tends to contract in directions perpendicular to the direction of stretching. It is defined as the ratio of transverse (lateral) strain to axial strain under axial loading (ν = -ε_lateral / ε_axial).',
    subject: Subject.MECHANICS_OF_MATERIALS,
  },
  {
    id: 15,
    text: 'Which ASTM test is commonly used to determine the compressive strength of concrete cylinders?',
    options: ['ASTM C39', 'ASTM C150', 'ASTM C33', 'ASTM C109'],
    correctAnswerIndex: 0,
    explanation: 'ASTM C39/C39M - "Standard Test Method for Compressive Strength of Cylindrical Concrete Specimens" is the standard procedure for determining the compressive strength of concrete cylinders.',
    subject: Subject.MATERIALS,
  },
  {
    id: 16,
    text: 'What is the unit of dynamic viscosity?',
    options: ['N/m²', 'm²/s', 'Pa·s', 'kg/m³'],
    correctAnswerIndex: 2,
    explanation: 'Dynamic viscosity (μ) measures a fluid\'s resistance to shear flow. Common units include Pascal-seconds (Pa·s) in the SI system or poise (P) or centipoise (cP).',
    subject: Subject.FLUID_MECHANICS,
  },
  {
    id: 17,
    text: 'In surveying, what is a "backsight" reading taken on?',
    options: ['A point of unknown elevation', 'A point of known elevation (benchmark or turning point)', 'The next point in a traverse', 'A temporary reference point'],
    correctAnswerIndex: 1,
    explanation: 'A backsight (BS) reading in leveling is taken on a point of known elevation, such as a benchmark (BM) or a previously established turning point (TP), to determine the height of the instrument (HI).',
    subject: Subject.SURVEYING,
  },
  {
    id: 18,
    text: 'What is the primary goal of secondary wastewater treatment?',
    options: ['Removal of large solids and grit', 'Removal of dissolved and suspended organic matter', 'Disinfection of pathogens', 'Removal of nutrients like nitrogen and phosphorus'],
    correctAnswerIndex: 1,
    explanation: 'Secondary treatment processes, typically biological (like activated sludge or trickling filters), focus on removing the dissolved and suspended biodegradable organic matter remaining after primary treatment.',
    subject: Subject.WATER_RESOURCES_AND_ENVIRONMENTAL,
  },
   {
    id: 19,
    text: 'What is the moment of inertia (Iₓ) for a rectangular section with base \'b\' and height \'h\' about its centroidal x-axis?',
    options: ['bh³/3', 'hb³/3', 'bh³/12', 'hb³/12'],
    correctAnswerIndex: 2,
    explanation: 'The moment of inertia of a rectangular cross-section about its centroidal axis parallel to the base is given by Iₓ = bh³/12.',
    subject: Subject.STATICS,
  },
  {
    id: 20,
    text: 'Which of the following is a key assumption in the analysis of ideal trusses?',
    options: ['Joints are rigid connections', 'Loads are applied only at the joints', 'Members are subjected to bending moments', 'Members can be curved'],
    correctAnswerIndex: 1,
    explanation: 'A fundamental assumption in ideal truss analysis is that all external loads and support reactions are applied only at the joints (nodes) of the truss.',
    subject: Subject.STRUCTURAL_ENGINEERING,
  },
  {
    id: 21,
    text: 'The Atterberg limits (Liquid Limit, Plastic Limit, Shrinkage Limit) are used to classify which type of soil?',
    options: ['Gravels', 'Sands', 'Silts and Clays (Fine-grained soils)', 'Organic soils'],
    correctAnswerIndex: 2,
    explanation: 'Atterberg limits are water content boundaries that define the consistency and behavior of fine-grained soils (silts and clays) as they transition between solid, semi-solid, plastic, and liquid states.',
    subject: Subject.GEOTECHNICAL_ENGINEERING,
  },
  {
    id: 22,
    text: 'What does "AADT" stand for in transportation engineering?',
    options: ['Average Annual Daily Traffic', 'Actual Average Daytime Traffic', 'Adjusted Annual Design Traffic', 'Approximate Average Daily Trips'],
    correctAnswerIndex: 0,
    explanation: 'AADT stands for Average Annual Daily Traffic, which represents the average number of vehicles passing a specific point on a roadway over a 24-hour period, averaged over 365 days.',
    subject: Subject.TRANSPORTATION_ENGINEERING,
  },
  {
    id: 23,
    text: 'In construction project management, what is the "Critical Path"?',
    options: ['The shortest path through the project network', 'The path with the most activities', 'The sequence of activities that determines the shortest possible project duration', 'The path with the lowest cost'],
    correctAnswerIndex: 2,
    explanation: 'The Critical Path is the sequence of project network activities that add up to the longest overall duration, regardless of how that duration compares to the planned project duration. It determines the shortest time possible to complete the project. Any delay in a critical path activity directly delays the project completion date.',
    subject: Subject.CONSTRUCTION_ENGINEERING,
  },
  {
    id: 24,
    text: 'Integrate ∫(4x + 5) dx.',
    options: ['4x² + 5x + C', '2x² + 5x + C', '4 + C', '2x² + 5 + C'],
    correctAnswerIndex: 1,
    explanation: 'Using the power rule for integration (∫xⁿ dx = xⁿ⁺¹ / (n+1)), ∫4x dx = 4(x²/2) = 2x², and ∫5 dx = 5x. Therefore, ∫(4x + 5) dx = 2x² + 5x + C, where C is the constant of integration.',
    subject: Subject.MATHEMATICS_AND_STATISTICS,
  },
  {
    id: 25,
    text: 'If an engineer discovers their design could potentially harm the public, what is their primary ethical obligation?',
    options: ['Inform their employer/client first', 'Hold paramount the safety, health, and welfare of the public', 'Keep the information confidential to protect their company', 'Fix the design without informing anyone'],
    correctAnswerIndex: 1,
    explanation: 'The first fundamental canon in most engineering codes of ethics (including NSPE) states that engineers shall hold paramount the safety, health, and welfare of the public.',
    subject: Subject.ETHICS_AND_PROFESSIONAL_PRACTICE,
  },
   {
    id: 26,
    text: 'What is the future value of $1,000 invested today for 5 years at an annual interest rate of 6% compounded annually?',
    options: ['$1,338.23', '$1,300.00', '$1,262.48', '$747.26'],
    correctAnswerIndex: 0,
    explanation: 'Future Value (FV) = Present Value (PV) * (1 + i)ⁿ. FV = $1,000 * (1 + 0.06)⁵ = $1,000 * (1.06)⁵ = $1,000 * 1.338225... ≈ $1,338.23.',
    subject: Subject.ENGINEERING_ECONOMICS,
  },
  {
    id: 27,
    text: 'A force vector is defined as F = 3i + 4j N. What is the magnitude of this force?',
    options: ['3 N', '4 N', '5 N', '7 N'],
    correctAnswerIndex: 2,
    explanation: 'The magnitude of a vector F = Axi + Ayj is given by |F| = √(Ax² + Ay²). Therefore, |F| = √(3² + 4²) = √(9 + 16) = √25 = 5 N.',
    subject: Subject.STATICS,
  },
  {
    id: 28,
    text: 'Newton\'s second law of motion relates force (F), mass (m), and acceleration (a). What is the equation?',
    options: ['F = ma', 'F = m/a', 'F = a/m', 'm = Fa'],
    correctAnswerIndex: 0,
    explanation: 'Newton\'s second law states that the force acting on an object is equal to the mass of that object times its acceleration (F = ma).',
    subject: Subject.DYNAMICS,
  },
  {
    id: 29,
    text: 'What type of stress occurs when a structural member is twisted?',
    options: ['Axial stress', 'Bending stress', 'Shear stress', 'Bearing stress'],
    correctAnswerIndex: 2,
    explanation: 'Torsion, or twisting, induces shear stresses within the cross-section of the member. These shear stresses vary from zero at the center to a maximum at the outer surface.',
    subject: Subject.MECHANICS_OF_MATERIALS,
  },
  {
    id: 30,
    text: 'What is the typical unit weight of normal-weight reinforced concrete?',
    options: ['100 lb/ft³ (16 kN/m³)', '125 lb/ft³ (20 kN/m³)', '150 lb/ft³ (24 kN/m³)', '175 lb/ft³ (28 kN/m³)'],
    correctAnswerIndex: 2,
    explanation: 'The nominal unit weight for design purposes for normal-weight reinforced concrete is commonly taken as 150 lb/ft³ (or approximately 24 kN/m³).',
    subject: Subject.MATERIALS,
  },
  {
    id: 31,
    text: 'The Reynolds number (Re) is a dimensionless quantity used to predict fluid flow patterns. What does a low Reynolds number (e.g., < 2100 in pipe flow) typically indicate?',
    options: ['Turbulent flow', 'Laminar flow', 'Compressible flow', 'Supersonic flow'],
    correctAnswerIndex: 1,
    explanation: 'A low Reynolds number indicates that viscous forces are dominant relative to inertial forces. In pipe flow, Re < 2100 generally corresponds to smooth, orderly laminar flow.',
    subject: Subject.FLUID_MECHANICS,
  },
  {
    id: 32,
    text: 'What is the sum of interior angles in a closed polygon with \'n\' sides?',
    options: ['(n-2) * 180°', 'n * 180°', '(n-1) * 180°', '360°'],
    correctAnswerIndex: 0,
    explanation: 'The formula for the sum of the interior angles of a simple polygon with n sides is (n - 2) * 180 degrees.',
    subject: Subject.SURVEYING,
  },
  {
    id: 33,
    text: 'The Safe Drinking Water Act (SDWA) regulates which aspect of water quality?',
    options: ['Wastewater discharge standards', 'Public drinking water supplies', 'Wetland protection', 'Industrial pollutant limits'],
    correctAnswerIndex: 1,
    explanation: 'The Safe Drinking Water Act (SDWA) is the main federal law in the United States that ensures the quality of Americans\' drinking water supplied by public water systems.',
    subject: Subject.WATER_RESOURCES_AND_ENVIRONMENTAL,
  },
  {
    id: 34,
    text: 'What is the purpose of shear stirrups in a reinforced concrete beam?',
    options: ['To resist bending moment', 'To resist shear forces', 'To confine the concrete core', 'To hold the longitudinal bars in place'],
    correctAnswerIndex: 1,
    explanation: 'Shear stirrups (transverse reinforcement) are placed perpendicular or inclined to the longitudinal reinforcement in beams primarily to resist shear forces and prevent diagonal tension cracking.',
    subject: Subject.STRUCTURAL_ENGINEERING,
  },
  {
    id: 35,
    text: 'What does the "Plasticity Index" (PI) of a soil represent?',
    options: ['The range of water content over which the soil remains in a plastic state (PI = LL - PL)', 'The water content at which the soil changes from liquid to plastic', 'The water content at which the soil changes from plastic to semi-solid', 'The compressibility of the soil'],
    correctAnswerIndex: 0,
    explanation: 'The Plasticity Index (PI) is a measure of the plasticity of a soil. It is calculated as the difference between the Liquid Limit (LL) and the Plastic Limit (PL): PI = LL - PL. It represents the range of water contents where the soil exhibits plastic properties.',
    subject: Subject.GEOTECHNICAL_ENGINEERING,
  },
  {
    id: 36,
    text: 'In traffic signal timing, what does the term "cycle length" refer to?',
    options: ['The duration of the green light for one approach', 'The time it takes for one vehicle to pass through the intersection', 'The total time required for one complete sequence of signal indications', 'The duration of the red light for all approaches'],
    correctAnswerIndex: 2,
    explanation: 'The cycle length (C) is the total time in seconds for a traffic signal to complete one full sequence of indications (green, yellow, red) for all approaches.',
    subject: Subject.TRANSPORTATION_ENGINEERING,
  },
  {
    id: 37,
    text: 'Which type of construction contract typically carries the most risk for the contractor?',
    options: ['Lump Sum', 'Cost Plus Fixed Fee', 'Unit Price', 'Guaranteed Maximum Price (GMP)'],
    correctAnswerIndex: 0,
    explanation: 'In a Lump Sum contract, the contractor agrees to complete the project for a predetermined, fixed price. The contractor bears most of the risk associated with cost overruns, unforeseen conditions, or estimating errors.',
    subject: Subject.CONSTRUCTION_ENGINEERING,
  },
  {
    id: 38,
    text: 'What is the standard deviation of the dataset: 2, 4, 4, 4, 5, 5, 7, 9?',
    options: ['1.5', '2.0', '2.14', '4.5'],
    correctAnswerIndex: 2,
    explanation: '1. Calculate the mean: (2+4+4+4+5+5+7+9)/8 = 40/8 = 5. 2. Calculate squared differences from the mean: (2-5)²=9, (4-5)²=1, (4-5)²=1, (4-5)²=1, (5-5)²=0, (5-5)²=0, (7-5)²=4, (9-5)²=16. 3. Sum of squared differences: 9+1+1+1+0+0+4+16 = 32. 4. Variance (for population): 32/8 = 4. Variance (for sample): 32/(8-1) = 32/7 ≈ 4.57. 5. Standard Deviation (sample): √4.57 ≈ 2.14.',
    subject: Subject.MATHEMATICS_AND_STATISTICS,
  },
  {
    id: 39,
    text: 'An engineer is asked to approve a design that they believe does not meet minimum safety standards. What should they do?',
    options: ['Approve it but note their concerns', 'Refuse to approve the design and report their concerns', 'Modify the design slightly and then approve it', 'Ask a colleague to approve it instead'],
    correctAnswerIndex: 1,
    explanation: 'Ethical obligations require engineers to prioritize public safety. If a design is unsafe, the engineer must refuse to approve it and should report their specific concerns to their employer or client, and potentially to regulatory authorities if necessary.',
    subject: Subject.ETHICS_AND_PROFESSIONAL_PRACTICE,
  },
  {
    id: 40,
    text: 'Calculate the equivalent annual cost (EAC) of an asset with an initial cost of $50,000, a useful life of 10 years, no salvage value, and a discount rate of 7%.',
    options: ['$5,000', '$7,119', '$8,523', '$9,333'],
    correctAnswerIndex: 1, // Corrected index based on calculation
    explanation: 'EAC = Initial Cost * (A/P, i, n). The Capital Recovery Factor (A/P, 7%, 10) is [i(1+i)ⁿ] / [(1+i)ⁿ - 1] = [0.07(1+0.07)¹⁰] / [(1+0.07)¹⁰ - 1] ≈ 0.142378. EAC = $50,000 * 0.142378 ≈ $7,118.90. Option B ($7,119) is the closest value.',
    subject: Subject.ENGINEERING_ECONOMICS,
  },
  {
    id: 41,
    text: 'A structure is in equilibrium. What can be said about the sum of forces and the sum of moments acting on it?',
    options: ['Sum of forces = 0, Sum of moments ≠ 0', 'Sum of forces ≠ 0, Sum of moments = 0', 'Sum of forces = 0, Sum of moments = 0', 'Sum of forces ≠ 0, Sum of moments ≠ 0'],
    correctAnswerIndex: 2,
    explanation: 'For a rigid body to be in static equilibrium, the vector sum of all external forces acting on the body must be zero (ΣF = 0), and the vector sum of all external moments about any point must also be zero (ΣM = 0).',
    subject: Subject.STATICS,
  },
  {
    id: 42,
    text: 'What is the kinetic energy of a 10 kg mass moving at a velocity of 5 m/s?',
    options: ['25 J', '50 J', '125 J', '250 J'],
    correctAnswerIndex: 2,
    explanation: 'Kinetic Energy (KE) = ½ * mass * velocity². KE = 0.5 * 10 kg * (5 m/s)² = 0.5 * 10 * 25 = 125 Joules (J).',
    subject: Subject.DYNAMICS,
  },
  {
    id: 43,
    text: 'Hooke\'s Law describes the relationship between which two quantities for an elastic material?',
    options: ['Stress and Temperature', 'Stress and Strain', 'Strain and Temperature', 'Force and Velocity'],
    correctAnswerIndex: 1,
    explanation: 'Hooke\'s Law states that for relatively small deformations of an object, the displacement or size of the deformation is directly proportional to the deforming force or load. In terms of stress (σ) and strain (ε), it is often expressed as σ = Eε, where E is the modulus of elasticity.',
    subject: Subject.MECHANICS_OF_MATERIALS,
  },
  {
    id: 44,
    text: 'What does the slump test measure in fresh concrete?',
    options: ['Air content', 'Compressive strength', 'Workability/Consistency', 'Setting time'],
    correctAnswerIndex: 2,
    explanation: 'The slump test (ASTM C143) is used to measure the consistency or workability of fresh concrete. A higher slump value generally indicates a more fluid/workable mix.',
    subject: Subject.MATERIALS,
  },
  {
    id: 45,
    text: 'The pressure at a certain depth in a static fluid is dependent on which factors?',
    options: ['Fluid density and depth only', 'Fluid density, depth, and surface area', 'Fluid viscosity and depth', 'Fluid velocity and density'],
    correctAnswerIndex: 0,
    explanation: 'The hydrostatic pressure (p) at a depth (h) in a static fluid is given by p = ρgh + p₀, where ρ is the fluid density, g is acceleration due to gravity, and p₀ is the pressure at the surface. Therefore, the gauge pressure (p - p₀) depends only on density and depth.',
    subject: Subject.FLUID_MECHANICS,
  },
   {
    id: 46,
    text: 'In surveying, what is the difference between Azimuth and Bearing?',
    options: [
      'Azimuth is measured from North or South, Bearing is only from North.',
      'Azimuth is 0-360° from North, Bearing is 0-90° from N/S towards E/W.',
      'Bearing is 0-360° from North, Azimuth is 0-90° from N/S towards E/W.',
      'They are the same thing.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Azimuth is the horizontal angle measured clockwise from a reference meridian (usually North) ranging from 0° to 360°. Bearing is the acute horizontal angle measured from the North or South meridian towards the East or West, ranging from 0° to 90°, requiring quadrant letters (e.g., N 45° E).',
    subject: Subject.SURVEYING,
  },
  {
    id: 47,
    text: 'What is Biochemical Oxygen Demand (BOD)?',
    options: [
      'The amount of oxygen required by chemical oxidants to break down waste.',
      'The total amount of dissolved oxygen in water.',
      'The amount of dissolved oxygen needed by aerobic biological organisms to break down organic material.',
      'The concentration of bacteria in wastewater.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Biochemical Oxygen Demand (BOD) measures the amount of dissolved oxygen consumed by aerobic microorganisms while decomposing organic matter in water, typically measured over 5 days (BOD₅). It is an indicator of water pollution.',
    subject: Subject.WATER_RESOURCES_AND_ENVIRONMENTAL,
  },
  {
    id: 48,
    text: 'Which structural element is primarily designed to resist axial compression?',
    options: ['Beam', 'Column', 'Slab', 'Shear wall'],
    correctAnswerIndex: 1,
    explanation: 'Columns are vertical structural elements that are designed primarily to support and transmit compressive loads from the structure above down to the foundation.',
    subject: Subject.STRUCTURAL_ENGINEERING,
  },
  {
    id: 49,
    text: 'What is the unit weight of water at standard temperature and pressure?',
    options: ['9.81 lb/ft³ (1.5 kN/m³)', '62.4 lb/ft³ (9.81 kN/m³)', '100 lb/ft³ (15.7 kN/m³)', '150 lb/ft³ (23.6 kN/m³)'],
    correctAnswerIndex: 1,
    explanation: 'The unit weight (γ) of water is approximately 62.4 pounds per cubic foot (lb/ft³) in US Customary units or 9.81 kilonewtons per cubic meter (kN/m³) in SI units.',
    subject: Subject.GEOTECHNICAL_ENGINEERING, // Also relevant to Fluid Mechanics & Water Resources
  },
  {
    id: 50,
    text: 'What is the purpose of a "superelevation" on a horizontal highway curve?',
    options: ['To increase stopping sight distance', 'To counteract the centrifugal force experienced by vehicles', 'To improve drainage', 'To reduce pavement wear'],
    correctAnswerIndex: 1,
    explanation: 'Superelevation, or banking, is the tilting of the roadway cross-section on a horizontal curve. It helps to counteract the outward centrifugal force acting on a vehicle, allowing for safer and more comfortable travel at the design speed.',
    subject: Subject.TRANSPORTATION_ENGINEERING,
  },
  {
    id: 51,
    text: 'Which scheduling technique uses arrows to represent activities and nodes to represent events?',
    options: ['Gantt Chart', 'Critical Path Method (CPM) - Activity on Node', 'Program Evaluation and Review Technique (PERT)', 'Arrow Diagramming Method (ADM) - Activity on Arrow'],
    correctAnswerIndex: 3,
    explanation: 'The Arrow Diagramming Method (ADM), also known as Activity on Arrow (AOA), is a network diagramming technique where activities are represented by arrows and nodes (circles) represent the start and end events of activities.',
    subject: Subject.CONSTRUCTION_ENGINEERING,
  },
  {
    id: 52,
    text: 'Find the determinant of the matrix: [[2, 1], [3, 4]]',
    options: ['5', '8', '11', '2'],
    correctAnswerIndex: 0,
    explanation: 'For a 2x2 matrix [[a, b], [c, d]], the determinant is ad - bc. So, the determinant is (2 * 4) - (1 * 3) = 8 - 3 = 5.',
    subject: Subject.MATHEMATICS_AND_STATISTICS,
  },
  {
    id: 53,
    text: 'What is "moonlighting" in the context of engineering ethics?',
    options: ['Working excessively long hours', 'Holding undisclosed secondary employment that conflicts with the primary employer\'s interests', 'Working on projects outside of one\'s area of expertise', 'Sharing confidential information between employers'],
    correctAnswerIndex: 1,
    explanation: 'Moonlighting refers to holding a second job, often secretly or without the primary employer\'s knowledge. In engineering ethics, it becomes problematic if the secondary employment creates a conflict of interest, uses the primary employer\'s resources, or affects performance at the primary job.',
    subject: Subject.ETHICS_AND_PROFESSIONAL_PRACTICE,
  },
  {
    id: 54,
    text: 'What is the Benefit-Cost Ratio (BCR)?',
    options: ['Ratio of total costs to total benefits', 'Ratio of the present worth of benefits to the present worth of costs', 'The difference between total benefits and total costs', 'The interest rate at which benefits equal costs'],
    correctAnswerIndex: 1,
    explanation: 'The Benefit-Cost Ratio (BCR) is an indicator used in cost-benefit analysis that attempts to summarize the overall value for money of a project or proposal. It is calculated by dividing the present worth of all expected benefits by the present worth of all associated costs.',
    subject: Subject.ENGINEERING_ECONOMICS,
  },
  {
    id: 55,
    text: 'What is the centroid location (ȳ) for a semi-circular area of radius \'r\', measured from the diameter?',
    options: ['r/2', 'r/π', '4r/(3π)', '2r/π'],
    correctAnswerIndex: 2,
    explanation: 'The centroid of a semi-circular area is located along its axis of symmetry at a distance of ȳ = 4r / (3π) from the diameter.',
    subject: Subject.STATICS,
  },
  {
    id: 56,
    text: 'What principle states that the work done by all forces acting on a particle (or rigid body) equals the change in its kinetic energy?',
    options: ['Conservation of Momentum', 'Principle of Work and Energy', 'Impulse-Momentum Principle', 'D\'Alembert\'s Principle'],
    correctAnswerIndex: 1,
    explanation: 'The Principle of Work and Energy states that the net work done on an object by the resultant force acting on it is equal to the change in the object\'s kinetic energy (W_net = ΔKE).',
    subject: Subject.DYNAMICS,
  },
   {
    id: 57,
    text: 'A circular shaft is subjected to a torque T. The maximum shear stress occurs where?',
    options: ['At the center of the shaft', 'At the outer surface of the shaft', 'Midway between the center and the outer surface', 'Uniformly across the cross-section'],
    correctAnswerIndex: 1,
    explanation: 'In a solid circular shaft subjected to torsion, the shear stress varies linearly from zero at the center to a maximum value (τ_max = Tr/J) at the outermost surface, where r is the radius and J is the polar moment of inertia.',
    subject: Subject.MECHANICS_OF_MATERIALS,
  },
  {
    id: 58,
    text: 'Which property of asphalt binder is primarily related to its resistance to flow at high temperatures?',
    options: ['Penetration', 'Viscosity', 'Ductility', 'Softening Point'],
    correctAnswerIndex: 3, // Or Viscosity depending on context, but Softening Point is more direct for flow resistance comparison
    explanation: 'The Softening Point test indicates the temperature at which an asphalt binder transitions from a semi-solid to a more liquid state, providing a measure of its resistance to flow or deformation at elevated service temperatures.',
    subject: Subject.MATERIALS,
  },
  {
    id: 59,
    text: 'What does the continuity equation (Q = A * V) represent for incompressible fluid flow?',
    options: ['Conservation of energy', 'Conservation of mass', 'Conservation of momentum', 'Relationship between pressure and velocity'],
    correctAnswerIndex: 1,
    explanation: 'The continuity equation (Q = A₁V₁ = A₂V₂) for incompressible flow is a statement of the principle of conservation of mass. It indicates that the volumetric flow rate (Q) must remain constant through a closed conduit, meaning the product of cross-sectional area (A) and average velocity (V) is constant.',
    subject: Subject.FLUID_MECHANICS,
  },
  {
    id: 60,
    text: 'What is the process of determining the horizontal and vertical positions of points on the Earth\'s surface called?',
    options: ['Leveling', 'Traversing', 'Topographic Surveying', 'Geodetic Surveying'],
    correctAnswerIndex: 2, // Can also be argued as Traversing or Geodetic depending on scale/scope, but Topographic is most general for both.
    explanation: 'Topographic surveying involves determining the relative locations (horizontal position) and elevations (vertical position) of points and features on the Earth\'s surface to create maps or models representing the terrain.',
    subject: Subject.SURVEYING,
  },
  {
    id: 61,
    text: 'Which law governs the rate of groundwater flow through porous media?',
    options: ['Bernoulli\'s Law', 'Manning\'s Law', 'Darcy\'s Law', 'Stokes\' Law'],
    correctAnswerIndex: 2,
    explanation: 'Darcy\'s Law describes the flow of a fluid through a porous medium. It states that the flow rate (Q) is proportional to the cross-sectional area (A) and the hydraulic gradient (i), and inversely proportional to the fluid viscosity (μ), related by the hydraulic conductivity (K). (Q = -KA(dh/dl) or v = -K(dh/dl)).',
    subject: Subject.WATER_RESOURCES_AND_ENVIRONMENTAL, // Also Geotechnical
  },
  {
    id: 62,
    text: 'In structural analysis, what is a "statically indeterminate" structure?',
    options: ['A structure that is unstable', 'A structure that can be analyzed using only the equations of static equilibrium', 'A structure where the number of unknown forces/reactions exceeds the number of available static equilibrium equations', 'A structure made of flexible materials'],
    correctAnswerIndex: 2,
    explanation: 'A structure is statically indeterminate if the static equilibrium equations (ΣFₓ=0, ΣF<0xE1><0xB5><0xA3>=0, ΣM=0) are insufficient by themselves to determine all the unknown internal forces and external reactions. Additional equations based on compatibility of deformations are needed.',
    subject: Subject.STRUCTURAL_ENGINEERING,
  },
  {
    id: 63,
    text: 'The effective stress in a soil mass is defined as:',
    options: ['Total stress minus pore water pressure', 'Total stress plus pore water pressure', 'Pore water pressure only', 'The weight of the soil particles'],
    correctAnswerIndex: 0,
    explanation: 'The principle of effective stress (σ\') states that the stress controlling the strength and deformation behavior of soil is the total stress (σ) minus the pore water pressure (u): σ\' = σ - u.',
    subject: Subject.GEOTECHNICAL_ENGINEERING,
  },
  {
    id: 64,
    text: 'What is the primary purpose of performing a traffic impact study (TIS)?',
    options: ['To determine the cost of building a new road', 'To assess the effects of a proposed development on the surrounding transportation network', 'To design traffic signal timings', 'To count the number of vehicles on a road'],
    correctAnswerIndex: 1,
    explanation: 'A Traffic Impact Study (TIS) analyzes the potential effects of traffic generated by a new development (e.g., shopping center, residential complex) on the safety and efficiency of the adjacent street system and identifies necessary improvements.',
    subject: Subject.TRANSPORTATION_ENGINEERING,
  },
  {
    id: 65,
    text: 'Which factor is typically NOT considered a direct cost in construction estimating?',
    options: ['Labor wages', 'Material purchases', 'Equipment rental', 'Home office overhead'],
    correctAnswerIndex: 3,
    explanation: 'Direct costs are expenses directly attributable to a specific construction activity (labor, materials, equipment, subcontractor costs). Home office overhead (rent, utilities, administrative salaries for the main office) is considered an indirect cost, allocated across multiple projects.',
    subject: Subject.CONSTRUCTION_ENGINEERING,
  },
  {
    id: 66,
    text: 'What is the probability of rolling a sum of 7 with two standard six-sided dice?',
    options: ['1/6', '1/12', '1/36', '7/36'],
    correctAnswerIndex: 0,
    explanation: 'There are 36 possible outcomes (6x6). The combinations that sum to 7 are (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) - there are 6 favorable outcomes. Probability = Favorable Outcomes / Total Outcomes = 6/36 = 1/6.',
    subject: Subject.MATHEMATICS_AND_STATISTICS,
  },
  {
    id: 67,
    text: 'If an engineer is offered a substantial gift from a contractor involved in a project they oversee, what ethical issue is raised?',
    options: ['Conflict of Interest', 'Confidentiality', 'Competence', 'Public Safety'],
    correctAnswerIndex: 0,
    explanation: 'Accepting gifts (beyond nominal value) from parties involved in a project the engineer is responsible for creates a conflict of interest, or the appearance of one, potentially compromising the engineer\'s judgment and objectivity.',
    subject: Subject.ETHICS_AND_PROFESSIONAL_PRACTICE,
  },
  {
    id: 68,
    text: 'Depreciation is best described as:',
    options: ['The decrease in market value of an asset over time', 'The allocation of the cost of a tangible asset over its useful life', 'The physical deterioration of an asset', 'The cost of maintaining an asset'],
    correctAnswerIndex: 1,
    explanation: 'In accounting and engineering economics, depreciation is the systematic allocation of the cost of a tangible asset over its expected useful life, representing the consumption of the asset\'s value.',
    subject: Subject.ENGINEERING_ECONOMICS,
  },
  {
    id: 69,
    text: 'What is the magnitude of the resultant of two forces, 5 N and 12 N, acting perpendicular to each other?',
    options: ['7 N', '13 N', '17 N', '60 N'],
    correctAnswerIndex: 1,
    explanation: 'Since the forces are perpendicular, the magnitude of the resultant (R) can be found using the Pythagorean theorem: R = √(5² + 12²) = √(25 + 144) = √169 = 13 N.',
    subject: Subject.STATICS,
  },
  {
    id: 70,
    text: 'A car accelerates uniformly from rest to 20 m/s in 5 seconds. What is its acceleration?',
    options: ['2 m/s²', '4 m/s²', '5 m/s²', '10 m/s²'],
    correctAnswerIndex: 1,
    explanation: 'Acceleration (a) = (Final Velocity (v) - Initial Velocity (u)) / Time (t). a = (20 m/s - 0 m/s) / 5 s = 20 / 5 = 4 m/s².',
    subject: Subject.DYNAMICS,
  },
    {
    id: 71,
    text: 'The "slenderness ratio" of a column is the ratio of its effective length to its:',
    options: ['Cross-sectional area', 'Radius of gyration', 'Moment of inertia', 'Diameter'],
    correctAnswerIndex: 1,
    explanation: 'The slenderness ratio (KL/r) is a key parameter in column buckling analysis. It is the ratio of the column\'s effective length (KL) to its least radius of gyration (r).',
    subject: Subject.MECHANICS_OF_MATERIALS,
  },
  {
    id: 72,
    text: 'What is the primary difference between Portland cement Type I and Type III?',
    options: ['Type III has higher sulfate resistance', 'Type III gains strength more rapidly', 'Type I has lower heat of hydration', 'Type I is white in color'],
    correctAnswerIndex: 1,
    explanation: 'Type III Portland cement is designated as high early strength cement. It achieves higher strength in the early stages (e.g., 1, 3, 7 days) compared to Type I (normal) cement due to finer grinding.',
    subject: Subject.MATERIALS,
  },
  {
    id: 73,
    text: 'What is the hydraulic radius for a circular pipe flowing full with diameter D?',
    options: ['D', 'D/2', 'D/4', 'πD²/4'],
    correctAnswerIndex: 2,
    explanation: 'The hydraulic radius (R<0xE1><0xB5><0x8F>) is defined as the cross-sectional flow area (A) divided by the wetted perimeter (P). For a circular pipe flowing full, A = πD²/4 and P = πD. R<0xE1><0xB5><0x8F> = A/P = (πD²/4) / (πD) = D/4.',
    subject: Subject.FLUID_MECHANICS,
  },
  {
    id: 74,
    text: 'Differential leveling is used to determine:',
    options: ['Horizontal distances', 'Horizontal angles', 'Differences in elevation between points', 'Areas of land'],
    correctAnswerIndex: 2,
    explanation: 'Differential leveling is the most common method for accurately determining differences in elevation between two or more points using a level instrument and graduated rods.',
    subject: Subject.SURVEYING,
  },
  {
    id: 75,
    text: 'What is the purpose of adding chlorine to drinking water?',
    options: ['To remove hardness', 'To improve taste and odor', 'To disinfect and kill harmful microorganisms', 'To adjust pH'],
    correctAnswerIndex: 2,
    explanation: 'Chlorination is a common method of water disinfection. Chlorine is added to kill or inactivate disease-causing bacteria, viruses, and other pathogens, making the water safe to drink.',
    subject: Subject.WATER_RESOURCES_AND_ENVIRONMENTAL,
  },
  {
    id: 76,
    text: 'What is the "yield strength" of a material?',
    options: ['The stress at which the material fractures', 'The maximum stress the material can withstand before permanent deformation occurs', 'The stress required to cause a specific amount of plastic deformation (e.g., 0.2% offset)', 'The stiffness of the material'],
    correctAnswerIndex: 2,
    explanation: 'Yield strength is the stress level at which a material begins to exhibit permanent (plastic) deformation. For materials without a distinct yield point, it is often defined by the stress corresponding to a specified offset strain (commonly 0.2%).',
    subject: Subject.STRUCTURAL_ENGINEERING, // Also Materials/Mechanics
  },
  {
    id: 77,
    text: 'What does a Standard Proctor test determine for a soil?',
    options: ['Shear strength parameters (c and φ)', 'Permeability (hydraulic conductivity)', 'Compressibility characteristics (Cc, Cr)', 'Maximum dry unit weight and optimum moisture content'],
    correctAnswerIndex: 3,
    explanation: 'The Standard Proctor compaction test (ASTM D698) is a laboratory method used to determine the relationship between the moisture content and the dry unit weight of a soil, identifying the optimum moisture content (OMC) at which the maximum dry unit weight (MDD) is achieved under a standard compactive effort.',
    subject: Subject.GEOTECHNICAL_ENGINEERING,
  },
  {
    id: 78,
    text: 'Which component of a flexible pavement structure primarily distributes the load to the subgrade?',
    options: ['Surface course (asphalt)', 'Base course', 'Subbase course', 'Subgrade'],
    correctAnswerIndex: 1, // Primarily Base, but Subbase also contributes significantly
    explanation: 'The base course, typically made of crushed aggregate, lies beneath the asphalt surface and is the principal load-spreading layer in a flexible pavement. It distributes the concentrated wheel loads over a wider area of the subbase and subgrade.',
    subject: Subject.TRANSPORTATION_ENGINEERING,
  },
  {
    id: 79,
    text: 'What is "float" or "slack" in project scheduling (CPM)?',
    options: ['The cost overrun on an activity', 'The amount of time an activity can be delayed without delaying the project completion date', 'The duration of a critical activity', 'The earliest start time of an activity'],
    correctAnswerIndex: 1,
    explanation: 'Float (or slack) is the amount of time that a non-critical activity in a project network can be delayed without causing a delay to the project completion date or violating schedule constraints. Critical activities have zero float.',
    subject: Subject.CONSTRUCTION_ENGINEERING,
  },
  {
    id: 80,
    text: 'Solve the differential equation dy/dx = 2x, given y(1) = 3.',
    options: ['y = x² + 2', 'y = 2x² + 1', 'y = x² + C', 'y = 2x + 1'],
    correctAnswerIndex: 0,
    explanation: 'Integrate dy/dx = 2x to get y = ∫2x dx = x² + C. Use the initial condition y(1) = 3: 3 = (1)² + C => 3 = 1 + C => C = 2. Therefore, the particular solution is y = x² + 2.',
    subject: Subject.MATHEMATICS_AND_STATISTICS,
  },
   {
    id: 81,
    text: 'An engineer is reviewing plans prepared by another licensed engineer. What responsibility do they have regarding errors found?',
    options: [
      'Ignore minor errors if the design is generally safe.',
      'Inform the original engineer and potentially the client or appropriate authorities if safety is compromised.',
      'Correct the errors without informing the original engineer.',
      'Publicly criticize the original engineer.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Ethical guidelines typically require engineers reviewing the work of others to be objective and truthful. If errors are found, especially those impacting safety, the reviewing engineer should inform the engineer who prepared the plans. If the issues are not resolved and safety is a concern, further reporting to the client or regulatory bodies may be necessary.',
    subject: Subject.ETHICS_AND_PROFESSIONAL_PRACTICE,
  },
  {
    id: 82,
    text: 'Which depreciation method results in higher depreciation charges in the early years of an asset\'s life and lower charges in later years?',
    options: [
      'Straight-Line Method',
      'Sum-of-the-Years\'-Digits (SOYD) Method',
      'Sinking Fund Method',
      'Units of Production Method'
    ],
    correctAnswerIndex: 1,
    explanation: 'Accelerated depreciation methods, such as the Sum-of-the-Years\'-Digits (SOYD) method and the Double Declining Balance (DDB) method, allocate a larger portion of an asset\'s cost to the earlier years of its life.',
    subject: Subject.ENGINEERING_ECONOMICS,
  },
  {
    id: 83,
    text: 'A rope is wrapped around a fixed cylindrical post. If the tension on one side is 100 N and the coefficient of static friction is 0.3, what is the maximum tension on the other side before slipping occurs, assuming the rope wraps 180° (π radians)?',
    options: ['150 N', '200 N', '256 N', '300 N'],
    correctAnswerIndex: 2,
    explanation: 'The belt friction equation is T₂ / T₁ = e^(μβ), where T₂ is the larger tension, T₁ is the smaller tension, μ is the coefficient of friction, and β is the wrap angle in radians. T₂ = T₁ * e^(μβ) = 100 N * e^(0.3 * π) ≈ 100 N * e^(0.942) ≈ 100 N * 2.56 ≈ 256 N.',
    subject: Subject.STATICS,
  },
  {
    id: 84,
    text: 'What is the period of oscillation for a simple pendulum of length L?',
    options: ['2π√(L/g)', '2π√(g/L)', '(1/2π)√(L/g)', '(1/2π)√(g/L)'],
    correctAnswerIndex: 0,
    explanation: 'For small angular displacements, the period (T) of a simple pendulum (mass on a massless string) is given by the formula T = 2π√(L/g), where L is the length of the pendulum and g is the acceleration due to gravity.',
    subject: Subject.DYNAMICS,
  },
  {
    id: 85,
    text: 'What is the maximum shear stress in a rectangular beam section (base b, height h) subjected to a shear force V?',
    options: ['V / (bh)', '2V / (3bh)', '3V / (2bh)', 'V / (2bh)'],
    correctAnswerIndex: 2,
    explanation: 'For a rectangular cross-section, the maximum shear stress occurs at the neutral axis and is given by τ_max = 3V / (2A), where A is the cross-sectional area (bh). Therefore, τ_max = 3V / (2bh).',
    subject: Subject.MECHANICS_OF_MATERIALS,
  },
  {
    id: 86,
    text: 'Creep in concrete refers to:',
    options: [
      'The shrinkage of concrete due to drying.',
      'The increase in strain over time under sustained stress.',
      'The cracking of concrete due to temperature changes.',
      'The rapid loss of strength at high temperatures.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Creep is the time-dependent deformation (increase in strain) of concrete that occurs when it is subjected to a sustained load (stress).',
    subject: Subject.MATERIALS,
  },
  {
    id: 87,
    text: 'The Manning\'s equation is used to calculate:',
    options: [
      'Flow velocity in open channels.',
      'Pressure drop in pipes.',
      'Lift force on an airfoil.',
      'Settling velocity of particles.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Manning\'s equation (V = (k/n) * R<0xE1><0xB5><0x8F>^(2/3) * S^(1/2)) is an empirical formula used to estimate the average velocity of liquid flowing in an open channel.',
    subject: Subject.FLUID_MECHANICS, // Also Water Resources
  },
  {
    id: 88,
    text: 'What does "closing the traverse" mean in surveying?',
    options: [
      'Ending the survey.',
      'Calculating the area enclosed by the traverse.',
      'Mathematically checking the accuracy of the measured angles and distances by ensuring the traverse ends at the starting point or another known point.',
      'Setting the final monument.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Closing a traverse involves performing calculations to check for errors in measured angles and distances. For a closed-loop traverse, the coordinates calculated should return to the starting point (zero misclosure). For a link traverse, it should end at a point with known coordinates.',
    subject: Subject.SURVEYING,
  },
  {
    id: 89,
    text: 'What is eutrophication?',
    options: [
      'The process of water purification.',
      'The depletion of oxygen in a water body.',
      'The excessive enrichment of a water body with nutrients, typically causing excessive plant growth and oxygen depletion.',
      'The accumulation of heavy metals in sediments.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Eutrophication is the process where a body of water becomes overly enriched with minerals and nutrients (primarily nitrogen and phosphorus), which induces excessive growth of algae and other aquatic plants. Subsequent decomposition depletes dissolved oxygen, harming aquatic life.',
    subject: Subject.WATER_RESOURCES_AND_ENVIRONMENTAL,
  },
  {
    id: 90,
    text: 'Which method is commonly used for the analysis of statically indeterminate trusses?',
    options: [
      'Method of Joints',
      'Method of Sections',
      'Method of Consistent Deformations (Force Method) or Slope-Deflection/Moment Distribution (Displacement Methods)',
      'Graphical Method (Maxwell Diagram)'
    ],
    correctAnswerIndex: 2,
    explanation: 'While the Method of Joints and Method of Sections are suitable for determinate trusses, indeterminate trusses require methods that incorporate member deformation and compatibility, such as the Force Method (e.g., virtual work, consistent deformations) or Displacement Methods (e.g., slope-deflection, moment distribution, stiffness matrix method).',
    subject: Subject.STRUCTURAL_ENGINEERING,
  },
  {
    id: 91,
    text: 'What is the primary cause of consolidation settlement in clay soils?',
    options: [
      'Elastic compression of soil grains.',
      'Expulsion of air from the voids.',
      'Expulsion of water from the voids due to sustained loading.',
      'Chemical changes in the soil structure.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Consolidation is a time-dependent settlement process occurring in saturated fine-grained soils (clays and silts) primarily due to the gradual expulsion of pore water from the soil voids under an applied load, leading to a decrease in volume.',
    subject: Subject.GEOTECHNICAL_ENGINEERING,
  },
  {
    id: 92,
    text: 'In pavement design, what is the purpose of the "subgrade"?',
    options: [
      'To provide a smooth riding surface.',
      'To distribute wheel loads.',
      'To provide the foundation for the pavement structure.',
      'To prevent water infiltration.'
    ],
    correctAnswerIndex: 2,
    explanation: 'The subgrade is the natural or prepared soil layer upon which the entire pavement structure (subbase, base, surface courses) is constructed. Its strength and stability are crucial for the overall performance and longevity of the pavement.',
    subject: Subject.TRANSPORTATION_ENGINEERING, // Also Geotechnical
  },
  {
    id: 93,
    text: 'Which document legally binds the contractor to perform the work described in the plans and specifications for a specific price?',
    options: [
      'Invitation to Bid',
      'Bid Proposal',
      'Construction Contract Agreement',
      'Notice to Proceed'
    ],
    correctAnswerIndex: 2,
    explanation: 'The Construction Contract Agreement is the formal, legally enforceable document signed by the owner and the contractor, outlining the scope of work, contract price, schedule, terms, conditions, and references to other contract documents (plans, specs, etc.).',
    subject: Subject.CONSTRUCTION_ENGINEERING,
  },
  {
    id: 94,
    text: 'If events A and B are independent, what is P(A and B)?',
    options: ['P(A) + P(B)', 'P(A) * P(B)', 'P(A) / P(B)', 'P(A | B)'],
    correctAnswerIndex: 1,
    explanation: 'By definition, two events A and B are independent if and only if the probability of both occurring, P(A ∩ B) or P(A and B), is equal to the product of their individual probabilities: P(A and B) = P(A) * P(B).',
    subject: Subject.MATHEMATICS_AND_STATISTICS,
  },
  {
    id: 95,
    text: 'What is the primary purpose of engineering licensure?',
    options: [
      'To enhance the prestige of the engineering profession.',
      'To ensure engineers meet minimum competency standards and practice ethically to protect public safety.',
      'To limit the number of practicing engineers.',
      'To facilitate interstate engineering practice.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Engineering licensure, administered by state boards, aims to safeguard the public health, safety, and welfare by ensuring that practicing engineers have met minimum requirements of education, experience, examination, and ethical conduct.',
    subject: Subject.ETHICS_AND_PROFESSIONAL_PRACTICE,
  },
  {
    id: 96,
    text: 'An investment yields benefits of $5,000 per year indefinitely. If the discount rate is 10%, what is the present worth of this perpetual benefit stream (perpetuity)?',
    options: ['$500', '$5,000', '$50,000', '$500,000'],
    correctAnswerIndex: 2,
    explanation: 'The present worth (P) of a perpetuity (a constant amount A occurring indefinitely) is given by P = A / i. P = $5,000 / 0.10 = $50,000.',
    subject: Subject.ENGINEERING_ECONOMICS,
  },
  {
    id: 97,
    text: 'A simply supported beam has a point load P at its mid-span (L/2). What is the reaction force at each support?',
    options: ['P', 'P/2', 'P/4', 'Depends on beam stiffness'],
    correctAnswerIndex: 1,
    explanation: 'Due to symmetry, the vertical load P applied at the center of a simply supported beam is shared equally by the two supports. Therefore, the reaction force at each support is P/2.',
    subject: Subject.STATICS,
  },
  {
    id: 98,
    text: 'What is the definition of impulse?',
    options: [
      'The change in momentum.',
      'The product of force and the time interval over which it acts.',
      'The product of mass and velocity.',
      'The rate of change of momentum.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Impulse is defined as the integral of a force, F, over the time interval, t, during which it acts (Impulse = ∫F dt). For a constant force, Impulse = F * Δt. The impulse-momentum theorem states that impulse equals the change in momentum.',
    subject: Subject.DYNAMICS,
  },
  {
    id: 99,
    text: 'Strain (ε) is defined as:',
    options: [
      'Force per unit area.',
      'Change in length per unit original length.',
      'Resistance to deformation.',
      'Energy absorbed per unit volume.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Normal strain (ε) is a measure of deformation representing the displacement between particles in the body relative to a reference length. It is typically defined as the change in length (ΔL) divided by the original length (L₀): ε = ΔL / L₀. It is a dimensionless quantity.',
    subject: Subject.MECHANICS_OF_MATERIALS,
  },
  {
    id: 100,
    text: 'What type of bond failure occurs when rebar pulls out of the surrounding concrete?',
    options: [
      'Splitting failure',
      'Pullout failure',
      'Bearing failure',
      'Shear failure'
    ],
    correctAnswerIndex: 1,
    explanation: 'Pullout failure occurs when the bond stress between the reinforcing bar and the surrounding concrete is exceeded, causing the bar to slip or pull out of the concrete without necessarily causing significant cracking of the concrete cover.',
    subject: Subject.MATERIALS, // Or Structural
  },
    {
    id: 101,
    text: 'Archimedes\' principle states that the buoyant force on a submerged object is equal to:',
    options: [
      'The weight of the object.',
      'The volume of the object.',
      'The weight of the fluid displaced by the object.',
      'The pressure at the bottom of the object.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Archimedes\' principle states that any body completely or partially submerged in a fluid (gas or liquid) at rest is acted upon by an upward, or buoyant, force (F<0xE1><0xB5><0x8E>), the magnitude of which is equal to the weight of the fluid displaced by the body (F<0xE1><0xB5><0x8E> = ρ<0xE1><0xB5><0xA0> * g * V<0xE2><0x82><0x9B><0xE1><0xB5><0x98><0xE1><0xB5><0x87>).',
    subject: Subject.FLUID_MECHANICS, // Also Statics
  },
  {
    id: 102,
    text: 'Which surveying instrument is primarily used to measure horizontal and vertical angles?',
    options: ['Level', 'Total Station', 'GPS Rover', 'Plumb Bob'],
    correctAnswerIndex: 1,
    explanation: 'A Total Station is an electronic/optical instrument that combines an electronic theodolite (for angle measurement) with an electronic distance meter (EDM). It is used to accurately measure both horizontal and vertical angles as well as distances.',
    subject: Subject.SURVEYING,
  },
  {
    id: 103,
    text: 'In the context of water treatment, what does "coagulation" achieve?',
    options: [
      'Disinfection of water.',
      'Removal of dissolved salts.',
      'Destabilization of colloidal particles to facilitate aggregation.',
      'Adjustment of pH.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Coagulation is a water treatment process where chemicals (coagulants, like alum or ferric chloride) are added to neutralize the negative charges on suspended colloidal particles (which cause turbidity and color). This allows the particles to stick together (agglomerate) into larger flocs during the subsequent flocculation step, making them easier to remove by sedimentation or filtration.',
    subject: Subject.WATER_RESOURCES_AND_ENVIRONMENTAL,
  },
  {
    id: 104,
    text: 'What is the primary function of bracing in a steel frame structure?',
    options: [
      'To support gravity loads.',
      'To provide resistance against lateral loads (wind or seismic).',
      'To reduce the weight of the structure.',
      'To enhance the aesthetic appearance.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Bracing systems (e.g., diagonal braces, shear walls) are incorporated into frame structures primarily to provide stability and resist lateral forces such as those induced by wind or earthquakes, preventing excessive sway or collapse.',
    subject: Subject.STRUCTURAL_ENGINEERING,
  },
  {
    id: 105,
    text: 'What is "quick condition" or "boiling" in soil mechanics?',
    options: [
      'Soil becoming extremely hard due to drying.',
      'Soil losing all shear strength due to upward seepage flow where the seepage force equals or exceeds the buoyant weight of the soil.',
      'Rapid settlement of soil under load.',
      'Swelling of clay soil upon wetting.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Quick condition (or boiling) occurs in granular soils when upward seepage flow creates a hydraulic gradient equal to the critical hydraulic gradient (i_c = γ\' / γ_w). At this point, the effective stress becomes zero, and the soil loses all shear strength, behaving like a fluid.',
    subject: Subject.GEOTECHNICAL_ENGINEERING,
  },
  {
    id: 106,
    text: 'What is the primary factor determining the required "stopping sight distance" (SSD) in highway design?',
    options: [
      'Vehicle speed and driver perception-reaction time.',
      'Roadway grade.',
      'Coefficient of friction between tires and pavement.',
      'All of the above.'
    ],
    correctAnswerIndex: 3,
    explanation: 'Stopping Sight Distance (SSD) is the minimum distance required for a driver traveling at the design speed to perceive an object, react, and bring the vehicle to a safe stop. It depends on the initial speed, the driver\'s perception-reaction time, the coefficient of braking friction (influenced by pavement condition), and the roadway grade.',
    subject: Subject.TRANSPORTATION_ENGINEERING,
  },
  {
    id: 107,
    text: 'Which of these is a common method for estimating construction costs based on historical data from similar projects?',
    options: [
      'Detailed Estimating (Quantity Takeoff)',
      'Parametric Estimating',
      'Bottom-Up Estimating',
      'Activity-Based Costing'
    ],
    correctAnswerIndex: 1,
    explanation: 'Parametric estimating uses historical data and statistical relationships (parameters like cost per square foot, cost per mile, etc.) to predict the cost of a current project based on the characteristics of similar past projects.',
    subject: Subject.CONSTRUCTION_ENGINEERING,
  },
  {
    id: 108,
    text: 'Find the eigenvalues of the matrix: [[3, 0], [1, 2]]',
    options: ['{3, 2}', '{3, 1}', '{0, 2}', '{1, 0}'],
    correctAnswerIndex: 0,
    explanation: 'For a triangular matrix (upper or lower), the eigenvalues are the entries on the main diagonal. This is a lower triangular matrix, so the eigenvalues are 3 and 2.',
    subject: Subject.MATHEMATICS_AND_STATISTICS,
  },
  {
    id: 109,
    text: 'What does the term "whistleblowing" mean in an ethical context?',
    options: [
      'Reporting minor rule infractions within a company.',
      'Exposing illegal, unethical, or harmful practices within an organization to the public or authorities.',
      'Working on personal projects during company time.',
      'Sharing trade secrets with competitors.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Whistleblowing is the act of reporting misconduct or wrongdoing (such as fraud, safety violations, discrimination, or illegal activities) within an organization to external parties like regulatory agencies, law enforcement, or the media, often after internal channels have failed.',
    subject: Subject.ETHICS_AND_PROFESSIONAL_PRACTICE,
  },
  {
    id: 110,
    text: 'What does the "Payback Period" measure?',
    options: [
      'The profitability of an investment.',
      'The time required for the cumulative benefits of an investment to equal the initial cost.',
      'The rate of return on an investment.',
      'The present value of future cash flows.'
    ],
    correctAnswerIndex: 1,
    explanation: 'The Payback Period is the length of time it takes for an investment project to generate enough cash flow to recover its initial investment cost. It is a simple measure of risk and liquidity, but it ignores the time value of money and cash flows beyond the payback period.',
    subject: Subject.ENGINEERING_ECONOMICS,
  },
  {
    id: 111,
    text: 'The moment of inertia of an area represents its:',
    options: [
      'Resistance to axial loading.',
      'Resistance to twisting.',
      'Resistance to bending.',
      'Total area.'
    ],
    correctAnswerIndex: 2,
    explanation: 'The area moment of inertia (or second moment of area) is a geometric property of a cross-section that reflects how its points are distributed with regard to an arbitrary axis. It directly relates to the section\'s resistance to bending and deflection (higher moment of inertia means greater resistance to bending).',
    subject: Subject.STATICS, // Also Mechanics of Materials
  },
  {
    id: 112,
    text: 'A projectile is launched at an angle θ with an initial velocity v₀. Neglecting air resistance, what component of its velocity remains constant throughout the flight?',
    options: [
      'Horizontal component of velocity (v<0xE2><0x82><0x93>)',
      'Vertical component of velocity (v<0xE1><0xB5><0xA3>)',
      'Total velocity magnitude',
      'None of the above'
    ],
    correctAnswerIndex: 0,
    explanation: 'In projectile motion without air resistance, the only force acting is gravity, which acts vertically. Therefore, there is no horizontal acceleration, and the horizontal component of velocity (v<0xE2><0x82><0x93> = v₀ cosθ) remains constant throughout the flight.',
    subject: Subject.DYNAMICS,
  },
  {
    id: 113,
    text: 'Thermal stress is induced in a material when:',
    options: [
      'The material is heated uniformly.',
      'The material is cooled uniformly.',
      'Temperature changes cause deformation, but the deformation is constrained.',
      'The material reaches its melting point.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Thermal stress arises when a material attempts to expand or contract due to a temperature change, but its movement is restricted or prevented by external constraints or internal gradients. If allowed to freely expand/contract, no stress develops.',
    subject: Subject.MECHANICS_OF_MATERIALS,
  },
  {
    id: 114,
    text: 'Which aggregate property significantly affects the workability of fresh concrete?',
    options: [
      'Specific gravity',
      'Soundness',
      'Shape and texture',
      'Hardness'
    ],
    correctAnswerIndex: 2,
    explanation: 'The shape (e.g., rounded vs. angular) and surface texture (smooth vs. rough) of aggregates influence the inter-particle friction and the amount of cement paste required to coat them, thereby significantly affecting the workability (ease of mixing, placing, consolidating, finishing) of the fresh concrete mix.',
    subject: Subject.MATERIALS,
  },
  {
    id: 115,
    text: 'What is "cavitation" in fluid systems?',
    options: [
      'The formation of air bubbles due to turbulence.',
      'The boiling of a liquid due to low pressure.',
      'Corrosion caused by acidic fluids.',
      'Sedimentation of particles in slow-moving fluid.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Cavitation is the formation of vapor bubbles within a liquid in regions where the pressure drops below the liquid\'s vapor pressure. When these bubbles subsequently collapse in higher pressure regions (e.g., pump impellers, valve outlets), they can cause noise, vibration, and significant damage.',
    subject: Subject.FLUID_MECHANICS,
  },
  {
    id: 116,
    text: 'A line has a bearing of S 45° E. What is its azimuth (measured from North)?',
    options: ['45°', '135°', '225°', '315°'],
    correctAnswerIndex: 1,
    explanation: 'Bearing S 45° E means 45° East of South. Azimuth is measured clockwise from North (0°). South is 180°. Moving 45° East (clockwise from South meridian) means the angle from North is 180° - 45° = 135°.', // Adjusted explanation slightly
    subject: Subject.SURVEYING,
  },
   {
    id: 117,
    text: 'What is the main purpose of an aeration tank in the activated sludge process?',
    options: [
      'To settle out solids.',
      'To provide oxygen to microorganisms breaking down organic waste.',
      'To disinfect the wastewater.',
      'To remove grit and debris.'
    ],
    correctAnswerIndex: 1,
    explanation: 'In the activated sludge process (a type of secondary wastewater treatment), the aeration tank provides oxygen (through mechanical aeration or diffusers) to sustain a population of aerobic microorganisms (the activated sludge) that consume the dissolved and suspended organic matter in the wastewater.',
    subject: Subject.WATER_RESOURCES_AND_ENVIRONMENTAL,
  },
  {
    id: 118,
    text: 'What does LRFD stand for in structural design?',
    options: [
      'Load and Resistance Factor Design',
      'Limit Resistance Factor Design',
      'Load and Reaction Force Diagram',
      'Lateral Resistance Frame Design'
    ],
    correctAnswerIndex: 0,
    explanation: 'LRFD stands for Load and Resistance Factor Design. It is a method of structural design that accounts for uncertainties by applying factors to increase the loads (factored loads) and factors to decrease the resistance or strength of the materials (factored resistance). The design criterion is: Factored Resistance ≥ Factored Loads.',
    subject: Subject.STRUCTURAL_ENGINEERING,
  },
  {
    id: 119,
    text: 'The "angle of internal friction" (φ) of a soil primarily represents its resistance to shearing due to:',
    options: [
      'Cohesion between particles.',
      'Interlocking and friction between soil grains.',
      'Water pressure in the voids.',
      'Elastic properties of the soil grains.'
    ],
    correctAnswerIndex: 1,
    explanation: 'The angle of internal friction (φ or phi) is a shear strength parameter representing the frictional resistance between soil particles, primarily due to inter-particle sliding and interlocking. It is a major component of shear strength, particularly in granular soils.',
    subject: Subject.GEOTECHNICAL_ENGINEERING,
  },
  {
    id: 120,
    text: 'What is the "design speed" of a highway?',
    options: [
      'The maximum legal speed limit.',
      'The average speed of traffic on the highway.',
      'The speed used to determine the geometric features of the road (e.g., curve radii, sight distance).',
      'The minimum speed allowed on the highway.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Design speed is a selected speed used to determine the various geometric design features of a roadway, ensuring they are adequate for safe operation under assumed conditions. It is not necessarily the posted speed limit.',
    subject: Subject.TRANSPORTATION_ENGINEERING,
  },
  {
    id: 121,
    text: 'Which of the following is generally considered a temporary structure in construction?',
    options: [
      'Foundation',
      'Concrete Formwork',
      'Load-bearing Wall',
      'Roof Truss'
    ],
    correctAnswerIndex: 1,
    explanation: 'Concrete formwork is a temporary mold or structure used to contain freshly placed concrete and shape it until it hardens sufficiently to support itself. It is removed after the concrete gains adequate strength.',
    subject: Subject.CONSTRUCTION_ENGINEERING,
  },
  {
    id: 122,
    text: 'What is the mode of the dataset: 5, 8, 9, 10, 10, 10, 11, 11, 12, 15?',
    options: ['9.5', '10', '10.1', '11'],
    correctAnswerIndex: 1,
    explanation: 'The mode is the value that appears most frequently in a dataset. In this dataset, the number 10 appears three times, more than any other number. Therefore, the mode is 10.',
    subject: Subject.MATHEMATICS_AND_STATISTICS,
  },
  {
    id: 123,
    text: 'Can an engineer ethically review a project for a public agency if they previously worked on the same project for the design firm that submitted it?',
    options: [
      'Yes, if they disclose the previous involvement and the agency consents.',
      'Yes, previous experience makes them more qualified.',
      'No, it represents an unavoidable conflict of interest.',
      'No, unless they are paid extra for the review.'
    ],
    correctAnswerIndex: 0,
    explanation: 'This situation presents a potential conflict of interest. Ethical guidelines generally permit such reviews only if the engineer fully discloses the prior association to the public agency (the current client/employer) and obtains their explicit consent to proceed with the review, ensuring impartiality.',
    subject: Subject.ETHICS_AND_PROFESSIONAL_PRACTICE,
  },
  {
    id: 124,
    text: 'What is meant by "opportunity cost" in engineering economics?',
    options: [
      'The cost of a missed investment opportunity.',
      'The potential benefit foregone by choosing one alternative over another.',
      'The actual cost incurred for a project.',
      'The cost associated with risks and uncertainties.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Opportunity cost represents the value or benefit of the next best alternative that must be given up when making a choice. It is a crucial concept in economic decision-making.',
    subject: Subject.ENGINEERING_ECONOMICS,
  },
  {
    id: 125,
    text: 'What is the resultant force vector R if F1 = 2i + 3j and F2 = -1i + 5j?',
    options: ['1i + 8j', '3i + 8j', '1i + 2j', '-2i + 15j'],
    correctAnswerIndex: 0,
    explanation: 'The resultant force vector is the vector sum of the individual forces. R = F1 + F2 = (2i + 3j) + (-1i + 5j) = (2 - 1)i + (3 + 5)j = 1i + 8j.',
    subject: Subject.STATICS,
  },
  {
    id: 126,
    text: 'Conservation of angular momentum applies to:',
    options: [
      'Linear motion only.',
      'Rotational motion when the net external torque is zero.',
      'Any system with constant mass.',
      'Systems where only gravity acts.'
    ],
    correctAnswerIndex: 1,
    explanation: 'The principle of conservation of angular momentum states that if the net external torque acting on a system is zero, the total angular momentum of the system remains constant.',
    subject: Subject.DYNAMICS,
  },
  {
    id: 127,
    text: 'A material experiences a stress of 100 MPa and a corresponding strain of 0.0005. What is its Modulus of Elasticity (E)?',
    options: ['50 GPa', '100 GPa', '150 GPa', '200 GPa'],
    correctAnswerIndex: 3,
    explanation: 'Modulus of Elasticity (E) = Stress (σ) / Strain (ε). E = 100 MPa / 0.0005 = 100 / (5 * 10⁻⁴) MPa = (100 / 5) * 10⁴ MPa = 20 * 10⁴ MPa = 200,000 MPa = 200 GPa.',
    subject: Subject.MECHANICS_OF_MATERIALS,
  },
  {
    id: 128,
    text: 'Air entrainment in concrete is primarily used to improve its resistance to:',
    options: [
      'Sulfate attack',
      'Abrasion',
      'Freeze-thaw cycles',
      'Chemical attack'
    ],
    correctAnswerIndex: 2,
    explanation: 'Air-entraining admixtures create billions of microscopic, stable air bubbles in the concrete. These bubbles provide space for water to expand upon freezing, thus relieving internal pressure and significantly improving the concrete\'s durability against damage from repeated freeze-thaw cycles.',
    subject: Subject.MATERIALS,
  },
  {
    id: 129,
    text: 'What is the specific gravity of a substance?',
    options: [
      'Its density divided by the density of water.',
      'Its weight divided by its volume.',
      'Its mass divided by its volume.',
      'Its density divided by the density of air.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Specific Gravity (SG) is the ratio of the density (or unit weight) of a substance to the density (or unit weight) of a reference substance, which is typically water for liquids and solids, at a specified temperature.',
    subject: Subject.FLUID_MECHANICS, // Also Materials, Geotechnical
  },
  {
    id: 130,
    text: 'What is the primary purpose of establishing control points in surveying?',
    options: [
      'To mark property boundaries.',
      'To provide a common, accurate reference framework (horizontal and vertical) for subsequent surveys and mapping.',
      'To measure angles and distances.',
      'To calculate areas and volumes.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Survey control points (or control network) are points with precisely determined horizontal coordinates and/or vertical elevations. They serve as a fundamental reference system for locating features, establishing boundaries, and ensuring consistency across different survey projects.',
    subject: Subject.SURVEYING,
  },
   {
    id: 131,
    text: 'The "hardness" of water is primarily caused by the presence of which dissolved ions?',
    options: [
      'Sodium and Potassium (Na⁺, K⁺)',
      'Calcium and Magnesium (Ca²⁺, Mg²⁺)',
      'Chloride and Sulfate (Cl⁻, SO₄²⁻)',
      'Iron and Manganese (Fe²⁺/Fe³⁺, Mn²⁺)'
    ],
    correctAnswerIndex: 1,
    explanation: 'Water hardness is mainly caused by dissolved divalent cations, primarily calcium (Ca²⁺) and magnesium (Mg²⁺) ions. These ions react with soap to form precipitate (scum) and can cause scale buildup in pipes and appliances.',
    subject: Subject.WATER_RESOURCES_AND_ENVIRONMENTAL,
  },
  {
    id: 132,
    text: 'What is the "effective length factor" (K) for a column that is fixed at both ends?',
    options: ['1.0', '0.5', '0.7', '2.0'],
    correctAnswerIndex: 1,
    explanation: 'The effective length factor (K) accounts for the end conditions of a column in buckling analysis. For a column theoretically fixed against both rotation and translation at both ends, the effective length (KL) used in the Euler buckling formula is 0.5 times the actual unbraced length (L), so K = 0.5.',
    subject: Subject.STRUCTURAL_ENGINEERING,
  },
  {
    id: 133,
    text: 'Which laboratory test is used to determine the grain size distribution of coarse-grained soils (sands and gravels)?',
    options: [
      'Hydrometer Analysis',
      'Atterberg Limits Test',
      'Sieve Analysis',
      'Direct Shear Test'
    ],
    correctAnswerIndex: 2,
    explanation: 'Sieve analysis (ASTM D6913) involves passing a soil sample through a series of sieves with progressively smaller openings and weighing the amount retained on each sieve. This determines the distribution of particle sizes for coarse-grained soils.',
    subject: Subject.GEOTECHNICAL_ENGINEERING,
  },
  {
    id: 134,
    text: 'What does the Level of Service (LOS) for a highway segment primarily describe?',
    options: [
      'The physical condition of the pavement.',
      'The number of accidents on the segment.',
      'The quality of traffic flow under specific conditions (e.g., speed, density, delay).',
      'The amount of traffic the segment can carry.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Level of Service (LOS) is a qualitative measure used to describe operational conditions within a traffic stream, generally in terms of service measures such as speed and travel time, freedom to maneuver, traffic interruptions, comfort, and convenience. LOS ranges from A (best) to F (worst/forced flow).',
    subject: Subject.TRANSPORTATION_ENGINEERING,
  },
  {
    id: 135,
    text: 'What is the purpose of "curing" concrete?',
    options: [
      'To accelerate the setting time.',
      'To maintain adequate moisture content and temperature for proper hydration and strength development.',
      'To remove excess water from the mix.',
      'To create a smooth surface finish.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Curing is the process of controlling the rate and extent of moisture loss and temperature in freshly placed concrete. Proper curing is essential for the chemical reaction (hydration) between cement and water to occur effectively, leading to desired strength, durability, and volume stability.',
    subject: Subject.CONSTRUCTION_ENGINEERING, // Also Materials
  },
  {
    id: 136,
    text: 'What is the cross product (vector product) of i and j (unit vectors along x and y axes)?',
    options: ['0', '1', 'k', '-k'],
    correctAnswerIndex: 2,
    explanation: 'Using the right-hand rule for the cross product of standard basis vectors: i × j = k, j × k = i, k × i = j. Also, j × i = -k, k × j = -i, i × k = -j, and i × i = j × j = k × k = 0.',
    subject: Subject.MATHEMATICS_AND_STATISTICS,
  },
  {
    id: 137,
    text: 'An engineer stamping/sealing plans they did not personally prepare or directly supervise is generally considered:',
    options: [
      'Acceptable if they review the plans carefully.',
      'Acceptable if the original preparer is also licensed.',
      'Unethical and often illegal ("plan stamping").',
      'Ethical if they take responsibility for the content.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Most state licensing laws and ethical codes prohibit engineers from sealing documents that were not prepared under their direct supervision and responsible charge. This practice, known as "plan stamping," undermines the purpose of the seal, which signifies personal professional responsibility for the work.',
    subject: Subject.ETHICS_AND_PROFESSIONAL_PRACTICE,
  },
  {
    id: 138,
    text: 'Which of the following is typically considered an "intangible" factor in engineering economic analysis?',
    options: [
      'Initial equipment cost',
      'Annual maintenance cost',
      'Improved employee morale',
      'Salvage value'
    ],
    correctAnswerIndex: 2,
    explanation: 'Intangible factors are those benefits or costs that are difficult or impossible to quantify in monetary terms, such as goodwill, safety improvements, employee morale, environmental impact, or aesthetic value. Tangible factors have measurable monetary values.',
    subject: Subject.ENGINEERING_ECONOMICS,
  },
  {
    id: 139,
    text: 'Varignon\'s Theorem (Principle of Moments) states that the moment of a force about a point is equal to:',
    options: [
      'The force multiplied by the perpendicular distance.',
      'The sum of the moments of its components about the same point.',
      'The cross product of the position vector and the force vector.',
      'All of the above (different ways of expressing the same principle).'
    ],
    correctAnswerIndex: 1, // Or D, as A and C are also related definitions/calculations
    explanation: 'Varignon\'s Theorem specifically states that the moment created by a force about a point is equal to the sum of the moments created by the components of that force about the same point. This is often useful for calculating moments when resolving the force into components is easier than finding the perpendicular distance.',
    subject: Subject.STATICS,
  },
  {
    id: 140,
    text: 'A flywheel slows down from 600 rpm to 300 rpm in 10 seconds due to friction. Assuming constant angular deceleration, what is the angular deceleration (α)?',
    options: ['-π rad/s²', '-2π rad/s²', '-3π rad/s²', '-6π rad/s²'],
    correctAnswerIndex: 0,
    explanation: '1. Convert rpm to rad/s: ωᵢ = 600 rpm * (2π rad / 1 rev) * (1 min / 60 s) = 20π rad/s. ω<0xE1><0xB5><0x93> = 300 rpm * (2π rad / 1 rev) * (1 min / 60 s) = 10π rad/s. 2. Use rotational kinematic equation: ω<0xE1><0xB5><0x93> = ωᵢ + αt. 10π rad/s = 20π rad/s + α * (10 s). -10π rad/s = α * 10 s. α = -π rad/s².',
    subject: Subject.DYNAMICS,
  },
   {
    id: 141,
    text: 'Stress concentration occurs:',
    options: [
      'Uniformly throughout a member.',
      'Near points of load application.',
      'At geometric discontinuities (holes, notches, fillets).',
      'Only in brittle materials.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Stress concentration is the localization of high stresses near abrupt changes in geometry, such as holes, notches, fillets, or changes in cross-section. The actual maximum stress near these features can be significantly higher than the nominal stress calculated based on the net cross-sectional area.',
    subject: Subject.MECHANICS_OF_MATERIALS,
  },
  {
    id: 142,
    text: 'Galvanizing is a process of coating steel with a layer of which metal to protect against corrosion?',
    options: ['Aluminum', 'Zinc', 'Copper', 'Chromium'],
    correctAnswerIndex: 1,
    explanation: 'Galvanizing involves applying a protective coating of zinc to steel or iron. The zinc acts as a sacrificial anode, corroding preferentially to the steel, thus protecting it from rust.',
    subject: Subject.MATERIALS,
  },
  {
    id: 143,
    text: 'The energy grade line (EGL) represents:',
    options: [
      'The elevation head (z) only.',
      'The sum of elevation head and pressure head (z + p/γ).',
      'The sum of elevation head, pressure head, and velocity head (z + p/γ + V²/2g).',
      'The pressure head (p/γ) only.'
    ],
    correctAnswerIndex: 2,
    explanation: 'The Energy Grade Line (EGL) represents the total head (total energy per unit weight) of the fluid along a streamline. It is the sum of the elevation head (z), the pressure head (p/γ), and the velocity head (V²/2g). The Hydraulic Grade Line (HGL) represents the sum of elevation and pressure heads only (z + p/γ).',
    subject: Subject.FLUID_MECHANICS,
  },
  {
    id: 144,
    text: 'What is magnetic declination?',
    options: [
      'The angle between True North and Magnetic North.',
      'The angle between Grid North and True North.',
      'The dip of the magnetic needle below horizontal.',
      'The strength of the Earth\'s magnetic field.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Magnetic declination is the horizontal angle between the direction of True North (geographic North Pole) and Magnetic North (the direction a compass needle points) at a specific location on the Earth\'s surface. It varies geographically and over time.',
    subject: Subject.SURVEYING,
  },
  {
    id: 145,
    text: 'Which process is NOT typically part of conventional drinking water treatment?',
    options: [
      'Coagulation & Flocculation',
      'Sedimentation',
      'Activated Sludge Treatment',
      'Filtration',
      'Disinfection'
    ],
    correctAnswerIndex: 2,
    explanation: 'Activated sludge treatment is a biological process used primarily for secondary wastewater treatment to remove organic matter. Conventional drinking water treatment focuses on removing turbidity, pathogens, and undesirable chemicals through processes like coagulation, flocculation, sedimentation, filtration, and disinfection.',
    subject: Subject.WATER_RESOURCES_AND_ENVIRONMENTAL,
  },
  {
    id: 146,
    text: 'What is the main difference between a Moment Frame and a Braced Frame in resisting lateral loads?',
    options: [
      'Moment frames use diagonal braces; braced frames do not.',
      'Moment frames rely on rigid joints; braced frames rely on diagonal members.',
      'Braced frames are more flexible than moment frames.',
      'Moment frames are only used for steel; braced frames only for concrete.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Moment-resisting frames achieve lateral stability through rigid connections between beams and columns, allowing the frame members themselves to resist lateral forces primarily through bending. Braced frames utilize diagonal bracing members (working in tension and/or compression) arranged in truss-like configurations to resist lateral forces primarily through axial loads in the braces.',
    subject: Subject.STRUCTURAL_ENGINEERING,
  },
  {
    id: 147,
    text: 'The California Bearing Ratio (CBR) test is used to evaluate the strength of:',
    options: [
      'Concrete',
      'Asphalt binder',
      'Soil subgrade and base materials for pavement design.',
      'Steel reinforcement.'
    ],
    correctAnswerIndex: 2,
    explanation: 'The California Bearing Ratio (CBR) test is an empirical penetration test used to evaluate the mechanical strength of subgrade soils, subbase materials, and base course materials beneath pavements. The results are used for pavement thickness design.',
    subject: Subject.GEOTECHNICAL_ENGINEERING, // Also Transportation
  },
  {
    id: 148,
    text: 'Which traffic flow parameter is defined as the number of vehicles passing a point per unit time (e.g., vehicles per hour)?',
    options: ['Density', 'Speed', 'Flow Rate (or Volume)', 'Headway'],
    correctAnswerIndex: 2,
    explanation: 'Flow rate (q), often called volume when measured over an hour, is the number of vehicles passing a specific point or cross-section of a lane or roadway during a given time interval. Density (k) is vehicles per unit distance (e.g., veh/mile), and Speed (u) is distance per unit time (e.g., mph).',
    subject: Subject.TRANSPORTATION_ENGINEERING,
  },
  {
    id: 149,
    text: 'What does "value engineering" aim to achieve in a construction project?',
    options: [
      'Minimize project duration.',
      'Maximize aesthetic appeal.',
      'Achieve the required project functions at the lowest life-cycle cost without sacrificing quality or performance.',
      'Increase contractor profit.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Value engineering is a systematic, organized approach to provide the necessary functions in a project at the lowest cost. It focuses on analyzing functions and identifying opportunities to reduce costs while maintaining or improving performance, reliability, quality, and safety.',
    subject: Subject.CONSTRUCTION_ENGINEERING,
  },
  {
    id: 150,
    text: 'What is the Taylor series expansion of eˣ around x=0 (Maclaurin series)?',
    options: [
      '1 - x + x²/2! - x³/3! + ...',
      '1 + x + x²/2! + x³/3! + ...',
      'x - x³/3! + x⁵/5! - ...',
      '1 + x² + x⁴ + ...'
    ],
    correctAnswerIndex: 1,
    explanation: 'The Maclaurin series for f(x) is Σ [fⁿ(0) / n!] * xⁿ. For f(x) = eˣ, all derivatives fⁿ(x) are eˣ, and fⁿ(0) = e⁰ = 1. Therefore, the series is 1/0! * x⁰ + 1/1! * x¹ + 1/2! * x² + 1/3! * x³ + ... = 1 + x + x²/2! + x³/3! + ...',
    subject: Subject.MATHEMATICS_AND_STATISTICS,
  },
  {
    id: 151,
    text: 'According to the NSPE Code of Ethics, engineers should perform services only in areas of their:',
    options: ['Interest', 'Certification', 'Competence', 'Highest profitability'],
    correctAnswerIndex: 2,
    explanation: 'A fundamental principle of engineering ethics is that engineers must only undertake assignments when qualified by education or experience in the specific technical fields involved. They should not practice outside their areas of competence.',
    subject: Subject.ETHICS_AND_PROFESSIONAL_PRACTICE,
  },
  {
    id: 152,
    text: 'What is the main difference between Present Worth (PW) analysis and Annual Worth (AW) analysis?',
    options: [
      'PW converts all cash flows to a single present sum; AW converts them to an equivalent uniform annual series.',
      'PW is used for short projects; AW for long projects.',
      'PW considers inflation; AW does not.',
      'PW uses a higher discount rate than AW.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Both methods compare alternatives based on the time value of money. Present Worth (or Net Present Value) analysis calculates the equivalent value of all cash flows at time zero. Annual Worth (or Equivalent Uniform Annual Cost/Benefit) analysis converts all cash flows into an equivalent uniform series over the analysis period. They yield consistent decisions when comparing alternatives with equal lives.',
    subject: Subject.ENGINEERING_ECONOMICS,
  },
  {
    id: 153,
    text: 'A frame member connected with frictionless pins at both ends and subjected only to forces at these pins is called a:',
    options: ['Beam', 'Column', 'Two-force member', 'Shaft'],
    correctAnswerIndex: 2,
    explanation: 'A two-force member is a structural element that is pin-connected at only two points and has no external load applied anywhere else. For equilibrium, the forces acting at the pins must be equal, opposite, and collinear, meaning the member is subjected only to axial tension or compression.',
    subject: Subject.STATICS,
  },
  {
    id: 154,
    text: 'What type of motion does an object undergo if its acceleration is always directed towards a fixed center and proportional to its distance from that center?',
    options: [
      'Uniform circular motion',
      'Projectile motion',
      'Simple Harmonic Motion (SHM)',
      'Rectilinear motion'
    ],
    correctAnswerIndex: 2,
    explanation: 'Simple Harmonic Motion (SHM) is a specific type of periodic motion where the restoring force (and thus acceleration) is directly proportional to the displacement from the equilibrium position and acts towards that position (F = -kx).',
    subject: Subject.DYNAMICS,
  },
  {
    id: 155,
    text: 'What is "fatigue" in materials?',
    options: [
      'Loss of strength due to high temperature.',
      'Permanent deformation under sustained load.',
      'Failure under repeated or fluctuating stresses, typically below the ultimate tensile strength.',
      'Corrosion accelerated by stress.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Fatigue is the weakening and eventual failure of a material caused by progressively localized structural damage that occurs when the material is subjected to cyclic or fluctuating stresses, even if the maximum stress is below the material\'s static ultimate strength.',
    subject: Subject.MECHANICS_OF_MATERIALS,
  },
  {
    id: 156,
    text: 'Which of these is a supplementary cementitious material (SCM) commonly used in concrete?',
    options: ['Portland cement', 'Fly ash', 'Fine aggregate (sand)', 'Coarse aggregate (gravel)'],
    correctAnswerIndex: 1,
    explanation: 'Fly ash, a byproduct of coal combustion, is a common supplementary cementitious material (SCM). When used in concrete, it can improve workability, reduce heat of hydration, enhance long-term strength, and increase resistance to chemical attack, while also partially replacing Portland cement.',
    subject: Subject.MATERIALS,
  },
  {
    id: 157,
    text: 'What is the Froude number (Fr) used to characterize?',
    options: [
      'The ratio of inertial forces to viscous forces (like Reynolds number).',
      'The ratio of inertial forces to gravitational forces in open channel flow.',
      'The compressibility of a fluid.',
      'The ratio of flow speed to the speed of sound (like Mach number).'
    ],
    correctAnswerIndex: 1,
    explanation: 'The Froude number (Fr = V / √(gD<0xE1><0xB5><0x8F>)) is a dimensionless number used primarily in open channel hydraulics. It compares the inertial forces to the gravitational forces and indicates the flow regime: Fr < 1 (subcritical flow), Fr = 1 (critical flow), Fr > 1 (supercritical flow).',
    subject: Subject.FLUID_MECHANICS, // Also Water Resources
  },
  {
    id: 158,
    text: 'Contour lines on a topographic map connect points of equal:',
    options: ['Horizontal distance', 'Elevation', 'Slope', 'Magnetic declination'],
    correctAnswerIndex: 1,
    explanation: 'Contour lines are lines drawn on a map that connect points having the same elevation above or below a reference datum (like sea level). They are used to represent the shape and relief of the terrain.',
    subject: Subject.SURVEYING,
  },
  {
    id: 159,
    text: 'What is the primary function of a sedimentation basin (clarifier) in water/wastewater treatment?',
    options: [
      'To kill pathogens.',
      'To remove suspended solids by gravity settling.',
      'To filter out fine particles.',
      'To add chemicals for coagulation.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Sedimentation basins (or clarifiers) are large tanks designed to slow down the flow of water or wastewater, allowing heavier suspended solids (like floc formed during coagulation/flocculation or biological solids from secondary treatment) to settle out by gravity.',
    subject: Subject.WATER_RESOURCES_AND_ENVIRONMENTAL,
  },
  {
    id: 160,
    text: 'In reinforced concrete beam design, what is the purpose of the "Whitney Stress Block"?',
    options: [
      'To calculate the shear strength of the beam.',
      'To determine the amount of steel reinforcement needed.',
      'To represent the distribution of tensile stresses in the concrete.',
      'To approximate the distribution of compressive stresses in the concrete at ultimate strength.'
    ],
    correctAnswerIndex: 3,
    explanation: 'The Whitney Stress Block is a simplified, equivalent rectangular stress distribution used in ultimate strength design (per ACI code) to represent the complex non-linear distribution of compressive stresses in the concrete above the neutral axis when the beam reaches its flexural capacity.',
    subject: Subject.STRUCTURAL_ENGINEERING,
  },
  {
    id: 161,
    text: 'What is the "coefficient of permeability" (or hydraulic conductivity) of a soil?',
    options: [
      'A measure of its compressibility.',
      'A measure of its shear strength.',
      'A measure of its ability to transmit water.',
      'A measure of its density.'
    ],
    correctAnswerIndex: 2,
    explanation: 'The coefficient of permeability (k), also known as hydraulic conductivity, quantifies the ease with which water can flow through the interconnected voids of a soil or rock mass. It is a key parameter in seepage and consolidation analyses.',
    subject: Subject.GEOTECHNICAL_ENGINEERING, // Also Water Resources
  },
  {
    id: 162,
    text: 'What is the primary role of traffic signs and pavement markings?',
    options: [
      'To slow down traffic.',
      'To provide guidance, regulation, and warning information to road users.',
      'To increase roadway capacity.',
      'To beautify the roadway.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Traffic control devices, including signs, signals, and markings, serve to regulate traffic flow, guide drivers along routes, warn of potential hazards, and provide information needed for safe and efficient navigation of the road network.',
    subject: Subject.TRANSPORTATION_ENGINEERING,
  },
  {
    id: 163,
    text: 'Which type of construction equipment is most suitable for excavating large amounts of soil below the machine\'s track level?',
    options: ['Bulldozer', 'Backhoe Excavator', 'Scraper', 'Grader'],
    correctAnswerIndex: 1,
    explanation: 'A backhoe excavator is designed with a digging bucket on the end of an articulated arm that primarily digs by pulling the bucket towards the machine, making it efficient for excavating trenches and pits below the level on which it sits.',
    subject: Subject.CONSTRUCTION_ENGINEERING,
  },
  {
    id: 164,
    text: 'What does the p-value in statistical hypothesis testing represent?',
    options: [
      'The probability of the null hypothesis being true.',
      'The probability of observing the test results, or more extreme results, if the null hypothesis were true.',
      'The significance level (alpha) chosen for the test.',
      'The power of the test (1 - beta).'
    ],
    correctAnswerIndex: 1,
    explanation: 'The p-value is the probability of obtaining test results at least as extreme as the results actually observed, under the assumption that the null hypothesis is correct. A small p-value (typically ≤ α) suggests that the observed data is inconsistent with the null hypothesis, leading to its rejection.',
    subject: Subject.MATHEMATICS_AND_STATISTICS,
  },
  {
    id: 165,
    text: 'Engineers are ethically obligated to issue public statements only in an objective and _____ manner.',
    options: ['Concise', 'Technical', 'Truthful', 'Approved'],
    correctAnswerIndex: 2,
    explanation: 'Most engineering codes of ethics require engineers to be objective and truthful in professional reports, statements, or testimony. They must include all relevant and pertinent information in such reports, statements, or testimony, which should bear the date indicating when it was current.',
    subject: Subject.ETHICS_AND_PROFESSIONAL_PRACTICE,
  },
  {
    id: 166,
    text: 'If the Minimum Attractive Rate of Return (MARR) is 12%, should a project with an Internal Rate of Return (IRR) of 10% be accepted?',
    options: [
      'Yes, because IRR > 0',
      'Yes, because IRR is positive',
      'No, because IRR < MARR',
      'Cannot determine without knowing the initial cost'
    ],
    correctAnswerIndex: 2,
    explanation: 'The Internal Rate of Return (IRR) is the discount rate at which the Net Present Value (NPV) of a project equals zero. A project is generally considered economically acceptable if its IRR is greater than or equal to the Minimum Attractive Rate of Return (MARR), which represents the minimum acceptable return on investment. Since 10% < 12%, the project should be rejected.',
    subject: Subject.ENGINEERING_ECONOMICS,
  },
  {
    id: 167,
    text: 'What does a free body diagram (FBD) show?',
    options: [
      'The internal forces within a body.',
      'The external forces and moments acting on an isolated body.',
      'The deformations of a body under load.',
      'The kinematic motion of a body.'
    ],
    correctAnswerIndex: 1,
    explanation: 'A free body diagram is a graphical illustration used to visualize the applied forces, moments, and resulting reactions on a body in a given condition. It depicts the body isolated from its surroundings, showing all external forces (including applied loads, support reactions, friction, weight) acting upon it.',
    subject: Subject.STATICS,
  },
  {
    id: 168,
    text: 'What is the relationship between linear velocity (v) and angular velocity (ω) for a point rotating at a radius (r) from the center of rotation?',
    options: ['v = ω / r', 'v = ω * r', 'v = ω² * r', 'v = ω / r²'],
    correctAnswerIndex: 1,
    explanation: 'The tangential linear velocity (v) of a point moving in a circular path is related to its angular velocity (ω, in radians per unit time) and the radius (r) of the path by the equation v = ωr.',
    subject: Subject.DYNAMICS,
  },
   {
    id: 169,
    text: 'What is the formula for torsional shear stress (τ) at a distance ρ from the center of a circular shaft with polar moment of inertia J subjected to torque T?',
    options: ['τ = Tρ / J', 'τ = TJ / ρ', 'τ = T / (Jρ)', 'τ = ρJ / T'],
    correctAnswerIndex: 0,
    explanation: 'The shear stress (τ) induced by a torque (T) in a circular shaft varies linearly with the radial distance (ρ) from the center according to the torsion formula: τ = Tρ / J, where J is the polar moment of inertia of the cross-section.',
    subject: Subject.MECHANICS_OF_MATERIALS,
  },
  {
    id: 170,
    text: 'Corrosion of reinforcing steel in concrete is often initiated by the ingress of which substances?',
    options: ['Sulfates and Alkalis', 'Chlorides and Carbon Dioxide', 'Nitrates and Phosphates', 'Oxygen and Water only'],
    correctAnswerIndex: 1,
    explanation: 'While oxygen and water are necessary for corrosion, the protective passive layer on steel reinforcement in concrete (due to high pH) is typically broken down by either chloride ions (from de-icing salts or marine environments) penetrating the concrete cover or by carbonation (reaction with atmospheric CO₂ reducing the pH).',
    subject: Subject.MATERIALS,
  },
  {
    id: 171,
    text: 'What device is used to measure the flow rate in an open channel by measuring the water level upstream of a calibrated obstruction?',
    options: ['Pitot tube', 'Venturi meter', 'Orifice plate', 'Weir or Flume'],
    correctAnswerIndex: 3,
    explanation: 'Weirs (like rectangular, V-notch) and flumes (like Parshall flume) are engineered structures placed in open channels that create a specific relationship between the upstream water depth (head) and the flow rate. By measuring the head, the flow rate can be determined using calibrated equations or tables.',
    subject: Subject.FLUID_MECHANICS, // Also Water Resources
  },
  {
    id: 172,
    text: 'In surveying, what is a "turning point" (TP)?',
    options: [
      'The starting point of the survey.',
      'A point where the direction of the traverse changes.',
      'A temporary point used in leveling where both a foresight and a backsight are taken.',
      'A permanent benchmark.'
    ],
    correctAnswerIndex: 2,
    explanation: 'A turning point (TP) is an intermediate point used in differential leveling to transfer an elevation. The level instrument takes a foresight (FS) reading on the TP, then the instrument is moved, and a backsight (BS) reading is taken on the same TP to establish the new instrument height.',
    subject: Subject.SURVEYING,
  },
  {
    id: 173,
    text: 'What is the purpose of sludge digestion in wastewater treatment?',
    options: [
      'To thicken the sludge.',
      'To disinfect the sludge.',
      'To reduce the volume of sludge and stabilize organic matter, often producing biogas.',
      'To remove nutrients from the sludge.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Sludge digestion (anaerobic or aerobic) is a process where microorganisms break down the organic solids in wastewater sludge. This reduces the total volume of sludge requiring disposal, destroys pathogens, reduces odors, and, in anaerobic digestion, produces methane-rich biogas that can be used as an energy source.',
    subject: Subject.WATER_RESOURCES_AND_ENVIRONMENTAL,
  },
  {
    id: 174,
    text: 'What is "shear lag" in structural engineering?',
    options: [
      'The delay in load transfer in bolted connections.',
      'The non-uniform stress distribution in wide flanges or connected elements where parts of the cross-section lag behind in carrying stress.',
      'The reduction in shear strength due to buckling.',
      'The time-dependent increase in shear deformation.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Shear lag occurs in members where tension or compression forces are introduced non-uniformly across the cross-section (e.g., in wide flanges connected only by the web, or in angle members connected by only one leg). Parts of the cross-section further from the connection are less effective in resisting the load, leading to a non-uniform stress distribution and a reduction in the effective area.',
    subject: Subject.STRUCTURAL_ENGINEERING,
  },
  {
    id: 175,
    text: 'What is the "liquidity index" (LI) of a soil?',
    options: [
      '(Water Content - Plastic Limit) / Plasticity Index',
      '(Liquid Limit - Water Content) / Plasticity Index',
      'Water Content / Liquid Limit',
      'Plasticity Index / Water Content'
    ],
    correctAnswerIndex: 0,
    explanation: 'The Liquidity Index (LI) indicates the relative consistency of a cohesive soil in its natural state. It is calculated as LI = (w - PL) / (LL - PL) = (w - PL) / PI, where w is the natural water content, PL is the Plastic Limit, LL is the Liquid Limit, and PI is the Plasticity Index. LI < 0 indicates brittle solid; 0 < LI < 1 indicates plastic state; LI > 1 indicates liquid state.',
    subject: Subject.GEOTECHNICAL_ENGINEERING,
  },
  {
    id: 176,
    text: 'The "Manual on Uniform Traffic Control Devices" (MUTCD) provides standards for:',
    options: [
      'Pavement design thickness.',
      'Geometric design of highways.',
      'Installation and maintenance of traffic signs, signals, and markings.',
      'Bridge inspection procedures.'
    ],
    correctAnswerIndex: 2,
    explanation: 'The MUTCD, published by the Federal Highway Administration (FHWA), defines the standards used by road managers nationwide to install and maintain traffic control devices on all public streets, highways, bikeways, and private roads open to public travel.',
    subject: Subject.TRANSPORTATION_ENGINEERING,
  },
  {
    id: 177,
    text: 'Which of the following is a primary safety concern associated with trench excavation in construction?',
    options: [
      'Noise pollution.',
      'Dust generation.',
      'Cave-ins or collapse of trench walls.',
      'Damage to underground utilities.'
    ],
    correctAnswerIndex: 2, // D is also a major concern, but C is often the most immediate life-threatening hazard.
    explanation: 'Trench collapses are a major cause of fatalities and serious injuries in construction. Unprotected trenches can collapse suddenly, trapping workers. OSHA regulations require protective systems (sloping, shoring, shielding) for trenches deeper than 5 feet, unless excavated entirely in stable rock.',
    subject: Subject.CONSTRUCTION_ENGINEERING,
  },
  {
    id: 178,
    text: 'Calculate the dot product (scalar product) of vectors A = 2i - 3j + k and B = i + 5j - 2k.',
    options: ['-15', '-10', '5', '15'],
    correctAnswerIndex: 0,
    explanation: 'The dot product A · B = (Ax * Bx) + (Ay * By) + (Az * Bz). A · B = (2 * 1) + (-3 * 5) + (1 * -2) = 2 - 15 - 2 = -15.',
    subject: Subject.MATHEMATICS_AND_STATISTICS,
  },
  {
    id: 179,
    text: 'Engineers should uphold and advance the integrity, honor, and dignity of the engineering profession by:',
    options: [
      'Using their knowledge for the enhancement of human welfare.',
      'Being honest and impartial.',
      'Striving to increase the competence and prestige of the profession.',
      'All of the above.'
    ],
    correctAnswerIndex: 3,
    explanation: 'These are all fundamental aspects of professional responsibility outlined in engineering codes of ethics (like NSPE Canon 1 and others). They encompass serving humanity, acting ethically, and supporting the profession itself.',
    subject: Subject.ETHICS_AND_PROFESSIONAL_PRACTICE,
  },
  {
    id: 180,
    text: 'What is the "breakeven point" in cost analysis?',
    options: [
      'The point where total revenue equals total cost.',
      'The point where profit is maximized.',
      'The point where marginal cost equals marginal revenue.',
      'The initial investment cost.'
    ],
    correctAnswerIndex: 0,
    explanation: 'The breakeven point is the level of production or sales volume at which a company\'s total revenues are exactly equal to its total costs (both fixed and variable). At this point, there is neither profit nor loss.',
    subject: Subject.ENGINEERING_ECONOMICS,
  },
  {
    id: 181,
    text: 'What condition must be met for three concurrent forces acting on a particle to be in equilibrium?',
    options: [
      'The forces must form a closed triangle when added head-to-tail.',
      'The vector sum of the forces must be zero.',
      'The forces must be equal in magnitude.',
      'Both A and B.'
    ],
    correctAnswerIndex: 3,
    explanation: 'For a particle subjected to concurrent forces to be in equilibrium, the vector sum of all forces must be zero (ΣF = 0). Graphically, this means that if the force vectors are added head-to-tail, they must form a closed polygon (a triangle in the case of three forces).',
    subject: Subject.STATICS,
  },
  {
    id: 182,
    text: 'Work is done by a force when:',
    options: [
      'The force is perpendicular to the displacement.',
      'The force causes a displacement in the direction of the force.',
      'The force is constant.',
      'The object is accelerating.'
    ],
    correctAnswerIndex: 1,
    explanation: 'In physics, work (W) is done by a force (F) on an object when the force causes a displacement (d) of the object, specifically W = F * d * cosθ, where θ is the angle between the force vector and the displacement vector. Work is maximized when the force and displacement are in the same direction (cos0° = 1) and is zero if they are perpendicular (cos90° = 0).',
    subject: Subject.DYNAMICS,
  },
  {
    id: 183,
    text: 'Beam deflection is typically inversely proportional to which property?',
    options: [
      'Applied load (P)',
      'Span length (L)',
      'Modulus of Elasticity (E) and Moment of Inertia (I)',
      'Temperature change'
    ],
    correctAnswerIndex: 2,
    explanation: 'Beam deflection formulas generally show that deflection is directly proportional to the applied load and some power of the span length, but inversely proportional to the material\'s stiffness (Modulus of Elasticity, E) and the cross-section\'s resistance to bending (Moment of Inertia, I). The product EI is known as the flexural rigidity.',
    subject: Subject.MECHANICS_OF_MATERIALS,
  },
  {
    id: 184,
    text: 'What is the primary component of structural steel?',
    options: ['Iron', 'Carbon', 'Chromium', 'Nickel'],
    correctAnswerIndex: 0,
    explanation: 'Steel is an alloy primarily composed of iron, with carbon being the most important alloying element (typically less than 2%). Carbon content influences steel\'s hardness, strength, and ductility.',
    subject: Subject.MATERIALS,
  },
  {
    id: 185,
    text: 'What is the piezometric head?',
    options: [
      'Elevation head (z)',
      'Pressure head (p/γ)',
      'Velocity head (V²/2g)',
      'Sum of elevation head and pressure head (z + p/γ)'
    ],
    correctAnswerIndex: 3,
    explanation: 'The piezometric head (h) represents the sum of the elevation head (z) and the pressure head (p/γ) at a point in a fluid. It corresponds to the level to which liquid would rise in a piezometer tube attached at that point. The Hydraulic Grade Line (HGL) represents the piezometric head along a flow path.',
    subject: Subject.FLUID_MECHANICS,
  },
  {
    id: 186,
    text: 'What type of error in surveying is typically reduced by repeating measurements and averaging?',
    options: ['Systematic errors', 'Random errors', 'Blunders (Mistakes)', 'Instrumental errors'],
    correctAnswerIndex: 1,
    explanation: 'Random errors are small, unpredictable variations in measurements caused by limitations of the observer and instrument under given conditions. They tend to follow statistical distributions (like the normal distribution). Repeating measurements and averaging helps to minimize the effect of random errors, as positive and negative errors tend to cancel out.',
    subject: Subject.SURVEYING,
  },
  {
    id: 187,
    text: 'Which parameter is commonly used to measure the concentration of suspended solids in water or wastewater?',
    options: [
      'Turbidity (NTU)',
      'Total Dissolved Solids (TDS)',
      'Total Suspended Solids (TSS) (mg/L)',
      'Biochemical Oxygen Demand (BOD)'
    ],
    correctAnswerIndex: 2,
    explanation: 'Total Suspended Solids (TSS) is a direct measurement of the mass of particulate matter suspended in a known volume of water, typically expressed in milligrams per liter (mg/L). It involves filtering a sample and weighing the residue retained on the filter.',
    subject: Subject.WATER_RESOURCES_AND_ENVIRONMENTAL,
  },
  {
    id: 188,
    text: 'What is the purpose of a "development length" for reinforcing bars in concrete?',
    options: [
      'To ensure the bar is long enough to span between supports.',
      'To provide adequate anchorage and ensure the bar can develop its yield strength through bond with the concrete.',
      'To prevent corrosion of the bar ends.',
      'To facilitate splicing between bars.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Development length (L<0xE1><0xB5><0x96>) is the minimum length of embedment required for a reinforcing bar to ensure that it can develop its full yield strength (f<0xE1><0xB5><0xA3>) without slipping or pulling out of the concrete. It depends on bar size, concrete strength, cover, spacing, and other factors.',
    subject: Subject.STRUCTURAL_ENGINEERING,
  },
  {
    id: 189,
    text: 'Shear strength of cohesive soils (clays) is primarily attributed to:',
    options: [
      'Friction between particles only.',
      'Cohesion (electrochemical attraction) between particles only.',
      'Both cohesion and friction.',
      'Negative pore water pressure.'
    ],
    correctAnswerIndex: 2,
    explanation: 'According to the Mohr-Coulomb failure criterion, the shear strength (τ) of soil is typically expressed as τ = c\' + σ\' tan(φ\'), where c\' is the effective cohesion and φ\' is the effective angle of internal friction. Cohesive soils like clay derive their strength from both interparticle attraction (cohesion) and frictional resistance.',
    subject: Subject.GEOTECHNICAL_ENGINEERING,
  },
  {
    id: 190,
    text: 'Which type of traffic signal operation adjusts timing based on real-time traffic demand detected by sensors?',
    options: ['Pretimed Control', 'Actuated Control', 'Coordinated Control', 'Flashing Operation'],
    correctAnswerIndex: 1,
    explanation: 'Actuated control uses detectors (e.g., loops, video cameras) on some or all approaches to detect vehicle presence or passage. The signal timing (phase durations, cycle length) is then adjusted in real-time based on the detected demand, making it more efficient than fixed pretimed control, especially under variable traffic conditions.',
    subject: Subject.TRANSPORTATION_ENGINEERING,
  },
  {
    id: 191,
    text: 'What is the primary purpose of using scaffolding in construction?',
    options: [
      'To lift heavy materials.',
      'To provide a temporary, safe working platform for workers and materials at elevated heights.',
      'To support formwork for concrete.',
      'To protect the public from construction activities.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Scaffolding is a temporary structure erected alongside a building or structure to provide access and a safe working platform for construction, maintenance, or repair activities at heights that are otherwise inaccessible.',
    subject: Subject.CONSTRUCTION_ENGINEERING,
  },
  {
    id: 192,
    text: 'What is the variance of a discrete random variable X?',
    options: [
      'E[X]',
      'E[X²]',
      'E[X²] - (E[X])²',
      '(E[X])² - E[X²]'
    ],
    correctAnswerIndex: 2,
    explanation: 'The variance, Var(X) or σ², measures the spread or dispersion of a random variable around its expected value (mean). It is defined as the expected value of the squared deviation from the mean: Var(X) = E[(X - E[X])²]. A common computational formula is Var(X) = E[X²] - (E[X])², where E[X²] is the expected value of X squared.',
    subject: Subject.MATHEMATICS_AND_STATISTICS,
  },
  {
    id: 193,
    text: 'If an engineer\'s professional judgment is overruled in a situation that endangers public safety, what should the engineer do?',
    options: [
      'Accept the decision and document it.',
      'Resign from the project immediately.',
      'Inform their employer/client and potentially regulatory authorities of the risks.',
      'Seek legal advice before taking action.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Ethical codes often require engineers to notify their employer or client if their judgment is overruled in circumstances where the life, health, property, or welfare of the public is endangered. If the employer/client fails to address the concerns, the engineer may have an obligation to report the situation to appropriate authorities.',
    subject: Subject.ETHICS_AND_PROFESSIONAL_PRACTICE,
  },
  {
    id: 194,
    text: 'Which cost is typically NOT included in a standard Benefit-Cost Ratio (BCR) analysis?',
    options: [
      'Initial construction costs',
      'Annual operating and maintenance costs',
      'Sunk costs (costs already incurred and irreversible)',
      'Environmental mitigation costs'
    ],
    correctAnswerIndex: 2,
    explanation: 'Sunk costs are past expenditures that cannot be recovered, regardless of future decisions. Since economic analysis focuses on future costs and benefits resulting from a decision, sunk costs are irrelevant and should not be included in the analysis of project alternatives.',
    subject: Subject.ENGINEERING_ECONOMICS,
  },
  {
    id: 195,
    text: 'What is the primary difference between force and pressure?',
    options: [
      'Force is a vector, pressure is a scalar.',
      'Force is measured in Newtons, pressure in Pascals.',
      'Pressure is force distributed over an area (P = F/A).',
      'All of the above.'
    ],
    correctAnswerIndex: 3,
    explanation: 'Force is a vector quantity describing an interaction that causes acceleration (measured in N or lb). Pressure is a scalar quantity defined as the force acting perpendicularly on a unit area (measured in Pa (N/m²) or psi (lb/in²)).',
    subject: Subject.STATICS, // Also Fluids, Mechanics
  },
  {
    id: 196,
    text: 'What does the coefficient of restitution (e) measure?',
    options: [
      'The friction between colliding objects.',
      'The ratio of relative velocity after impact to relative velocity before impact for colliding bodies.',
      'The energy lost during a collision.',
      'The duration of contact during impact.'
    ],
    correctAnswerIndex: 1,
    explanation: 'The coefficient of restitution (e) quantifies the "bounciness" of a collision between two objects. It is defined as the negative ratio of the relative velocity of separation after impact to the relative velocity of approach before impact along the line of impact. e=1 for perfectly elastic collision, e=0 for perfectly inelastic collision.',
    subject: Subject.DYNAMICS,
  },
  {
    id: 197,
    text: 'What is plane stress?',
    options: [
      'A state where stresses act only in one direction.',
      'A state where stresses act only within a single plane (e.g., σ<0xE2><0x82><0x93>, σ<0xE1><0xB5><0xA3>, τ<0xE2><0x82><0x93><0xE1><0xB5><0xA3>), with stresses perpendicular to that plane being zero.',
      'A state where strain is zero in one direction.',
      'A state where only shear stresses exist.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Plane stress is a condition assumed in thin bodies loaded in the plane of their dimensions, where the stress components acting perpendicular to this plane (σ<0xE1><0xB5><0xA2>, τ<0xE2><0x82><0x93><0xE1><0xB5><0xA2>, τ<0xE1><0xB5><0xA3><0xE1><0xB5><0xA2>) are assumed to be negligible or zero compared to the in-plane stresses (σ<0xE2><0x82><0x93>, σ<0xE1><0xB5><0xA3>, τ<0xE2><0x82><0x93><0xE1><0xB5><0xA3>).',
    subject: Subject.MECHANICS_OF_MATERIALS,
  },
  {
    id: 198,
    text: 'Which standard test measures the resistance of aggregates to abrasion and degradation?',
    options: [
      'Specific Gravity Test (ASTM C127/C128)',
      'Soundness Test (ASTM C88)',
      'Los Angeles (L.A.) Abrasion Test (ASTM C131/C535)',
      'Sieve Analysis (ASTM C136)'
    ],
    correctAnswerIndex: 2,
    explanation: 'The Los Angeles (L.A.) Abrasion test measures the degradation of mineral aggregates resulting from a combination of actions including abrasion, impact, and grinding in a rotating steel drum containing a specified number of steel spheres. It indicates the aggregate\'s toughness and resistance to wear.',
    subject: Subject.MATERIALS,
  },
  {
    id: 199,
    text: 'What is the Darcy-Weisbach equation used for?',
    options: [
      'Calculating head loss due to friction in pipe flow.',
      'Calculating flow rate in open channels.',
      'Determining the buoyant force on submerged objects.',
      'Calculating seepage velocity through soil.'
    ],
    correctAnswerIndex: 0,
    explanation: 'The Darcy-Weisbach equation (h<0xE1><0xB5><0x93> = f * (L/D) * (V²/2g)) is a fundamental equation in pipe hydraulics used to calculate the major head loss (energy loss) due to friction as fluid flows through a length (L) of pipe with diameter (D), velocity (V), and friction factor (f).',
    subject: Subject.FLUID_MECHANICS,
  },
  {
    id: 200,
    text: 'A closed-loop traverse begins and ends at the same point. What should the theoretical sum of the interior angles be if the traverse has \'n\' sides?',
    options: ['(n) * 180°', '(n - 2) * 180°', '(n + 2) * 180°', '360°'],
    correctAnswerIndex: 1,
    explanation: 'The sum of the interior angles of any simple closed polygon with n sides (and n vertices) is given by the formula (n - 2) * 180°. This geometric fact is used to check the angular misclosure in a closed traverse.',
    subject: Subject.SURVEYING,
  },
  {
    id: 201,
    text: 'What is the primary purpose of grit chambers in wastewater treatment plants?',
    options: [
      'To remove large floating objects.',
      'To remove heavy inorganic solids like sand, gravel, and eggshells.',
      'To remove grease and scum.',
      'To settle out organic solids.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Grit chambers are part of preliminary treatment, designed to slow down the flow just enough to allow heavy inorganic materials (grit) to settle out, while keeping lighter organic solids in suspension. Removing grit protects downstream equipment from abrasion and prevents accumulation in tanks.',
    subject: Subject.WATER_RESOURCES_AND_ENVIRONMENTAL,
  },
  {
    id: 202,
    text: 'What is the difference between a "shear connection" and a "moment connection" in steel structures?',
    options: [
      'Shear connections use bolts; moment connections use welds.',
      'Shear connections transfer only vertical forces; moment connections transfer both vertical forces and bending moments.',
      'Moment connections are weaker than shear connections.',
      'Shear connections are used for columns; moment connections for beams.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Simple shear connections (like a web-angle connection) are designed primarily to transfer shear forces between members (e.g., beam reaction to a column) and are assumed to offer negligible resistance to rotation (moment). Moment connections (like a flange-welded connection) are designed to be rigid, transferring both shear forces and significant bending moments between connected members, contributing to frame stability.',
    subject: Subject.STRUCTURAL_ENGINEERING,
  },
  {
    id: 203,
    text: 'What does the "degree of saturation" (S) represent for a soil sample?',
    options: [
      'The ratio of the volume of water to the total volume of the sample.',
      'The ratio of the weight of water to the weight of solids.',
      'The ratio of the volume of water to the volume of voids, expressed as a percentage.',
      'The ratio of the volume of voids to the total volume.'
    ],
    correctAnswerIndex: 2,
    explanation: 'The degree of saturation (S) indicates how much of the void space in a soil sample is filled with water. It is calculated as S = (Volume of Water / Volume of Voids) * 100%. S=0% for a dry soil, S=100% for a fully saturated soil.',
    subject: Subject.GEOTECHNICAL_ENGINEERING,
  },
  {
    id: 204,
    text: 'Which factor is typically NOT directly considered when calculating highway capacity?',
    options: [
      'Number of lanes',
      'Lane width and shoulder conditions',
      'Percentage of heavy vehicles',
      'Pavement condition rating'
    ],
    correctAnswerIndex: 3,
    explanation: 'Highway capacity analysis (following procedures like the Highway Capacity Manual - HCM) typically considers geometric factors (lanes, width, grade), traffic composition (heavy vehicles), and traffic control factors. While poor pavement condition might indirectly affect speed and driver behavior, it\'s not usually a direct input parameter in standard capacity calculations, which focus more on flow characteristics.',
    subject: Subject.TRANSPORTATION_ENGINEERING,
  },
  {
    id: 205,
    text: 'What is the primary advantage of using Critical Path Method (CPM) for project scheduling?',
    options: [
      'It is the easiest method to implement.',
      'It identifies the activities that directly impact the project completion date.',
      'It guarantees the project will finish on time.',
      'It focuses primarily on project costs.'
    ],
    correctAnswerIndex: 1,
    explanation: 'CPM analysis determines the sequence of activities (the critical path) that has the longest duration and therefore controls the minimum project completion time. Identifying these critical activities allows managers to focus attention and resources on them to prevent delays.',
    subject: Subject.CONSTRUCTION_ENGINEERING,
  },
   {
    id: 206,
    text: 'If y = sin(2x), what is dy/dx?',
    options: ['cos(2x)', '-cos(2x)', '2cos(2x)', '-2sin(2x)'],
    correctAnswerIndex: 2,
    explanation: 'Using the chain rule: d/dx[f(g(x))] = f\'(g(x)) * g\'(x). Here, f(u) = sin(u) and g(x) = 2x. f\'(u) = cos(u) and g\'(x) = 2. So, dy/dx = cos(2x) * 2 = 2cos(2x).',
    subject: Subject.MATHEMATICS_AND_STATISTICS,
  },
  {
    id: 207,
    text: 'Ethically, when are engineers permitted to publicly express technical opinions?',
    options: [
      'Anytime, as freedom of speech.',
      'Only when paid for the opinion.',
      'When founded upon knowledge of the facts and competence in the subject matter.',
      'Only when supporting their employer\'s position.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Engineers have a responsibility to ensure that their public statements on technical matters are based on adequate knowledge and honest conviction. Expressing opinions without sufficient factual basis or outside one\'s area of competence can be misleading and unethical.',
    subject: Subject.ETHICS_AND_PROFESSIONAL_PRACTICE,
  },
  {
    id: 208,
    text: 'What type of cost typically decreases on a per-unit basis as production volume increases?',
    options: ['Fixed costs', 'Variable costs', 'Marginal costs', 'Sunk costs'],
    correctAnswerIndex: 0,
    explanation: 'Fixed costs (e.g., rent, administrative salaries) remain relatively constant regardless of production volume. When allocated over a larger number of units, the fixed cost per unit decreases. Variable costs change with production volume.',
    subject: Subject.ENGINEERING_ECONOMICS,
  }
  // Add more questions up to ID 208 following the pattern...
];
