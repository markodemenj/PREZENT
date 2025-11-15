// Presentation State
let currentSlide = 1;
const totalSlides = 12;

// Speaker Notes Data
const speakerNotes = {
  1: `
    <div class="notes-title">Slide 1: Title Slide - Speaker Notes (40 seconds)</div>
    <div class="notes-text">
      <p><strong>Opening:</strong></p>
      <ul>
        <li>Welcome and introduce the topic: multi-bioactive graphene oxide/gelatin/alginate scaffolds for wound healing</li>
        <li>Set context: This is a breakthrough in moving from single-target to comprehensive multi-phase wound management</li>
        <li>Emphasize the dual approach: structural ECM mimicry PLUS biochemical multi-target stimulation</li>
      </ul>
      <p><strong>Transition:</strong> "Let's begin by examining the scale of the clinical challenge we're addressing..."</p>
    </div>
  `,
  2: `
    <div class="notes-title">Slide 2: Chronic Wound Epidemiology - Speaker Notes (45 seconds)</div>
    <div class="notes-text">
      <p><strong>Key Statistics to Emphasize:</strong></p>
      <ul>
        <li><strong>18.6 million</strong> diabetic foot ulcers worldwide annually with a devastating <strong>30% 5-year mortality rate</strong></li>
        <li>Venous ulcers affect 500,000-600,000 Americans with <strong>50-76% recurrence</strong> after healing</li>
        <li>ICU pressure ulcer prevalence reaches <strong>21.5%</strong>, contributing to 60,000 annual deaths</li>
        <li>The economic burden is staggering: <strong>$28-32 billion annually</strong> to US Medicare alone</li>
      </ul>
      <p><strong>Visual Reference:</strong> Point to the wound healing phases diagram - these are the four critical phases that conventional treatments fail to address comprehensively</p>
      <p><strong>Transition:</strong> "These numbers underscore why single-target treatments have proven inadequate..."</p>
    </div>
  `,
  3: `
    <div class="notes-title">Slide 3: Single-Target Treatments - Speaker Notes (50 seconds)</div>
    <div class="notes-text">
      <p><strong>Critical Point:</strong> Current treatments address only ONE phase of healing at a time</p>
      <ul>
        <li><strong>Silver alginate and iodine:</strong> Only antimicrobial, limited to inflammation phase, 7-day maximum residence time</li>
        <li><strong>Gauze and foam dressings:</strong> Passive barriers with no active healing promotion - just absorption</li>
        <li><strong>Hydrocolloids:</strong> Some moisture management but fiber deposition complications and zero antimicrobial properties</li>
      </ul>
      <p><strong>The Evidence Gap:</strong></p>
      <ul>
        <li>Conventional therapy: only <strong>57.3% healing rate</strong> at 12 weeks</li>
        <li>Emerging multi-target therapy: <strong>81.3% healing rate</strong> - that's a 42% relative improvement</li>
        <li>This gap represents thousands of preventable amputations and deaths annually</li>
      </ul>
      <p><strong>Transition:</strong> "This is precisely why we developed a dual-mechanism approach..."</p>
    </div>
  `,
  4: `
    <div class="notes-title">Slide 4: The Solution - Dual ECM-Mimetic Approach - Speaker Notes (45 seconds)</div>
    <div class="notes-text">
      <p><strong>Emphasize the Innovation:</strong> Two simultaneous mechanisms working synergistically</p>
      <p><strong>Left Side - Structural Support:</strong></p>
      <ul>
        <li>93-96% porosity matches native tissue architecture</li>
        <li>RGD sequences in gelatin provide specific cell adhesion sites</li>
        <li>Graphene oxide nanoparticles add mechanical strength without compromising flexibility</li>
      </ul>
      <p><strong>Right Side - Biochemical Stimulation:</strong></p>
      <ul>
        <li>Three bioactive agents released simultaneously over 72 hours</li>
        <li>Each agent targets a specific healing phase</li>
        <li>Biphasic release profile ensures continuous coverage</li>
      </ul>
      <p><strong>Visual Reference:</strong> Point to the fibroblast/ECM image showing how our scaffold mimics natural tissue architecture</p>
      <p><strong>Transition:</strong> "Let's examine the specific components that make this possible..."</p>
    </div>
  `,
  5: `
    <div class="notes-title">Slide 5: Scaffold Composition - Speaker Notes (45 seconds)</div>
    <div class="notes-text">
      <p><strong>Component Breakdown - Each has a specific function:</strong></p>
      <ul>
        <li><strong>Gelatin (40%):</strong> Type A porcine source, contains RGD sequences - these are the specific amino acid sequences cells recognize for adhesion. Lower immunogenicity than intact collagen.</li>
        <li><strong>Sodium Alginate (35%):</strong> Marine-derived polysaccharide provides inherent antibacterial properties, enhances hydrophilicity, and creates porosity during lyophilization</li>
        <li><strong>Graphene Oxide (5-10%):</strong> Nanoparticle reinforcement adds mechanical strength, angiogenic properties, and additional antimicrobial effects</li>
      </ul>
      <p><strong>Manufacturing Process:</strong> EDC crosslinking creates an interpenetrating polymer network, then lyophilization produces the 93-96% porosity</p>
      <p><strong>Visual Reference:</strong> SEM images show the porous architecture at the microscale - this is what allows cell infiltration and vascularization</p>
      <p><strong>Transition:</strong> "Now let's examine the three bioactive agents incorporated into this scaffold..."</p>
    </div>
  `,
  6: `
    <div class="notes-title">Slide 6: Triple Bioactive Agents - Speaker Notes (50 seconds)</div>
    <div class="notes-text">
      <p><strong>Critical Innovation:</strong> Three agents, three phases, one comprehensive approach</p>
      <p><strong>Allantoin (Blue Card):</strong></p>
      <ul>
        <li>Targets the transition from inflammation to proliferation</li>
        <li>Modulates inflammatory response while simultaneously promoting granulation tissue</li>
        <li>38-46% release over 72 hours provides sustained activity</li>
      </ul>
      <p><strong>Caffeic Acid (Orange Card):</strong></p>
      <ul>
        <li>Targets proliferation phase specifically</li>
        <li>Dual antioxidant and anti-inflammatory properties</li>
        <li>Critically improves re-epithelialization - that's the formation of new skin surface</li>
        <li>52-62% release provides peak activity during proliferation</li>
      </ul>
      <p><strong>Quercetin (Purple Card):</strong></p>
      <ul>
        <li>Targets remodeling phase - often neglected by conventional treatments</li>
        <li>Antifibrotic activity prevents hypertrophic scars and keloids</li>
        <li>80-92% release ensures long-term scar prevention</li>
        <li>This is why we see 16.6-fold improvement in scar index</li>
      </ul>
      <p><strong>Transition:</strong> "The release kinetics of these agents are carefully designed..."</p>
    </div>
  `,
  7: `
    <div class="notes-title">Slide 7: Release Kinetics - Speaker Notes (40 seconds)</div>
    <div class="notes-text">
      <p><strong>Key Concept:</strong> Biphasic release profile matches wound healing timeline</p>
      <ul>
        <li><strong>Phase 1 (0-6 hours):</strong> Rapid initial release provides immediate therapeutic coverage
          <ul>
            <li>Allantoin: 3.79-4.59 mg/hour</li>
            <li>Caffeic Acid: 5.18-6.22 mg/hour</li>
            <li>Quercetin: 7.99-9.19 mg/hour (highest for antifibrotic effect)</li>
          </ul>
        </li>
        <li><strong>Phase 2 (6-72 hours):</strong> Sustained release maintains therapeutic levels
          <ul>
            <li>Dramatically reduced rates ensure continuous coverage without toxicity</li>
            <li>This 72-hour window covers the critical inflammatory and early proliferative phases</li>
          </ul>
        </li>
      </ul>
      <p><strong>Chart Interpretation:</strong> Notice how all three agents are released simultaneously but at different rates optimized for their target phases</p>
      <p><strong>Transition:</strong> "These agents work within a scaffold that matches native tissue properties..."</p>
    </div>
  `,
  8: `
    <div class="notes-title">Slide 8: Clinical Properties - Speaker Notes (45 seconds)</div>
    <div class="notes-text">
      <p><strong>Emphasize Clinical Relevance of Each Property:</strong></p>
      <ul>
        <li><strong>93-96% Porosity:</strong> Matches native tissue, allows cell infiltration and vascularization - essential for integration</li>
        <li><strong>Young's Modulus 1.10-2.90 MPa:</strong> Within the range of skin elasticity (0.4-20 MPa) - means it moves naturally with tissue</li>
        <li><strong>11-23x Swelling Capacity:</strong> Superior exudate management prevents maceration while maintaining moist healing environment</li>
        <li><strong>Contact Angle <90°:</strong> Hydrophilic surface promotes cell adhesion - cells can "see" and attach to the scaffold</li>
        <li><strong>Spontaneous Adhesion:</strong> This is critical - no sutures required, works across 0-120° joint angles, enables application to challenging anatomical sites</li>
      </ul>
      <p><strong>Visual Reference:</strong> SEM images show the porous microarchitecture that enables these properties</p>
      <p><strong>Clinical Significance:</strong> These properties combined mean the scaffold can be applied in outpatient settings, requires no specialized equipment, and works across diverse wound types</p>
      <p><strong>Transition:</strong> "Let's examine specific clinical applications across different wound types..."</p>
    </div>
  `,
  9: `
    <div class="notes-title">Slide 9: Clinical Applications - Speaker Notes (50 seconds)</div>
    <div class="notes-text">
      <p><strong>Four Wound Types - Color Coded:</strong></p>
      <p><strong>Burns (Red):</strong></p>
      <ul>
        <li>450,000 treated annually, 30,000 require burn centers</li>
        <li>35-day closure time, precedent set by Integra® (FDA-approved for 30+ years)</li>
        <li>Reduced autografting needs = reduced donor site morbidity</li>
      </ul>
      <p><strong>Diabetic Foot Ulcers (Blue):</strong></p>
      <ul>
        <li>Most devastating: 18.6M worldwide, 30% mortality at 5 years</li>
        <li><strong>73-97% healing rates vs. 50-60% conventional</strong> - this difference saves limbs and lives</li>
        <li>RGD sequences + antibacterial + angiogenic support address the diabetic wound pathophysiology</li>
      </ul>
      <p><strong>Venous Ulcers (Purple):</strong></p>
      <ul>
        <li>1% overall prevalence, 3% in elderly</li>
        <li>50-76% recurrence is the major challenge</li>
        <li>Superior exudate management (11-23x swelling) addresses the chronic exudate problem</li>
      </ul>
      <p><strong>Surgical Wounds (Green):</strong></p>
      <ul>
        <li>$11.7-13B annual cost - most expensive category</li>
        <li>16.6-fold scar index improvement - critical for aesthetic and functional outcomes</li>
      </ul>
      <p><strong>Transition:</strong> "Now let's look at the comparative effectiveness data..."</p>
    </div>
  `,
  10: `
    <div class="notes-title">Slide 10: Comparative Effectiveness - Speaker Notes (45 seconds)</div>
    <div class="notes-text">
      <p><strong>The Evidence - Side-by-Side Comparison:</strong></p>
      <p><strong>Conventional Therapy (Red Box):</strong></p>
      <ul>
        <li>57.33% healing rate at 12 weeks</li>
        <li>10.4 weeks average time to healing</li>
        <li>Pain score 6.2 (moderate-severe pain)</li>
        <li>Quality of life score only 44.3</li>
      </ul>
      <p><strong>Multi-Target Emerging Therapy (Green Box):</strong></p>
      <ul>
        <li><strong>81.33% healing rate</strong> - that's a 42% relative improvement</li>
        <li><strong>8.0 weeks</strong> to healing - 2.4 weeks faster (23% reduction)</li>
        <li><strong>Pain score 4.7</strong> - significantly reduced patient suffering</li>
        <li><strong>Quality of life 61.8</strong> - 40% improvement in QoL scores</li>
      </ul>
      <p><strong>Chart Interpretation:</strong> The bar chart shows dramatic differences across all parameters - healing rate, time, pain, quality of life</p>
      <p><strong>Statistical Significance:</strong> Advanced dressings show 52% higher healing rates with odds ratio 1.52 - this is clinically and statistically significant</p>
      <p><strong>Real-World Impact:</strong> These differences translate to thousands of prevented amputations, reduced hospitalizations, and billions in healthcare savings</p>
      <p><strong>Transition:</strong> "These outcomes are driven by six key clinical advantages..."</p>
    </div>
  `,
  11: `
    <div class="notes-title">Slide 11: Clinical Advantages - Speaker Notes (45 seconds)</div>
    <div class="notes-text">
      <p><strong>Six Key Differentiators - Dashboard View:</strong></p>
      <ul>
        <li><strong>1. Comprehensive Phase Coverage:</strong> Unlike single-target treatments, we address ALL THREE healing phases simultaneously - inflammation, proliferation, AND remodeling</li>
        <li><strong>2. Dual Action Mechanism:</strong> Synergy between structural ECM-mimetic support and biochemical multi-target stimulation - the scaffold provides the foundation while bioactive agents drive cellular processes</li>
        <li><strong>3. Patient-Centered Design:</strong> Non-invasive, no sutures, single application lasts weeks - dramatically reduces patient burden and clinic visits</li>
        <li><strong>4. Clinical Practicality:</strong> Room temperature storage, no specialized equipment, outpatient application - accessible to diverse clinical settings</li>
        <li><strong>5. Superior Outcomes:</strong> 30-50% faster closure, 16.6× scar reduction, up to 97% healing rates in diabetic ulcers - these are transformative improvements</li>
        <li><strong>6. Safety Profile:</strong> Natural biocompatible components with FDA-approved precedents like Integra® and Apligraf® - proven safety record</li>
      </ul>
      <p><strong>Emphasize:</strong> These advantages work together - it's not just one feature but the comprehensive integration that drives outcomes</p>
      <p><strong>Transition:</strong> "Let me conclude with future directions..."</p>
    </div>
  `,
  12: `
    <div class="notes-title">Slide 12: Conclusions & Future Directions - Speaker Notes (40 seconds)</div>
    <div class="notes-text">
      <p><strong>Key Conclusions - Reinforce Main Messages:</strong></p>
      <ul>
        <li>Multi-bioactive scaffolds address the fundamental limitation of single-target treatments</li>
        <li>Dual ECM-mimetic approach provides comprehensive coverage across all healing phases</li>
        <li>Clinical evidence shows 81.3% vs. 57.3% healing rates - clinically meaningful improvement</li>
        <li>Applicable across diverse wound types: burns, diabetic, venous, surgical</li>
        <li>Patient-centered design improves both outcomes and quality of life</li>
      </ul>
      <p><strong>Future Directions - Three Columns:</strong></p>
      <ul>
        <li><strong>Immediate:</strong> Phase I/II trials, optimization, cost-effectiveness analysis</li>
        <li><strong>Advanced:</strong> Personalized formulations, smart responsive release, growth factor integration</li>
        <li><strong>Emerging Applications:</strong> Aesthetic dermatology, pediatric burns, radiation dermatitis, epidermolysis bullosa</li>
      </ul>
      <p><strong>Closing Statement:</strong> "Multi-bioactive scaffolds represent a paradigm shift from single-target to comprehensive wound management. This dual approach - structural support plus biochemical stimulation - addresses the full complexity of chronic wounds and offers hope for millions of patients worldwide."</p>
      <p><strong>Thank the audience and open for questions.</strong></p>
    </div>
  `
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  updateSlideDisplay();
  initializeCharts();
  setupEventListeners();
});

function setupEventListeners() {
  document.getElementById('prevBtn').addEventListener('click', previousSlide);
  document.getElementById('nextBtn').addEventListener('click', nextSlide);
  document.getElementById('toggleNotes').addEventListener('click', toggleNotes);
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') previousSlide();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'n' || e.key === 'N') toggleNotes();
  });
}

function nextSlide() {
  if (currentSlide < totalSlides) {
    currentSlide++;
    updateSlideDisplay();
  }
}

function previousSlide() {
  if (currentSlide > 1) {
    currentSlide--;
    updateSlideDisplay();
  }
}

function updateSlideDisplay() {
  // Hide all slides
  document.querySelectorAll('.slide').forEach(slide => {
    slide.classList.remove('active');
  });
  
  // Show current slide
  const activeSlide = document.querySelector(`.slide[data-slide="${currentSlide}"]`);
  if (activeSlide) {
    activeSlide.classList.add('active');
  }
  
  // Update controls
  document.getElementById('slideIndicator').textContent = `Slide ${currentSlide} of ${totalSlides}`;
  document.getElementById('prevBtn').disabled = currentSlide === 1;
  document.getElementById('nextBtn').disabled = currentSlide === totalSlides;
  
  // Update speaker notes
  updateSpeakerNotes();
}

function updateSpeakerNotes() {
  const notesContent = document.getElementById('notesContent');
  if (speakerNotes[currentSlide]) {
    notesContent.innerHTML = speakerNotes[currentSlide];
  } else {
    notesContent.innerHTML = '<div class="notes-title">Speaker Notes</div><div class="notes-text"><p>No notes available for this slide.</p></div>';
  }
}

function toggleNotes() {
  const notesPanel = document.getElementById('notesPanel');
  notesPanel.classList.toggle('open');
}

function initializeCharts() {
  // Chart 1: Release Kinetics (Slide 7)
  const releaseCtx = document.getElementById('releaseChart');
  if (releaseCtx) {
    new Chart(releaseCtx, {
      type: 'line',
      data: {
        labels: ['0h', '6h', '12h', '24h', '36h', '48h', '60h', '72h'],
        datasets: [
          {
            label: 'Allantoin Release (%)',
            data: [0, 25, 32, 36, 39, 41, 43, 46],
            borderColor: '#2196F3',
            backgroundColor: 'rgba(33, 150, 243, 0.1)',
            tension: 0.4,
            borderWidth: 3
          },
          {
            label: 'Caffeic Acid Release (%)',
            data: [0, 35, 45, 50, 54, 57, 59, 62],
            borderColor: '#FF9800',
            backgroundColor: 'rgba(255, 152, 0, 0.1)',
            tension: 0.4,
            borderWidth: 3
          },
          {
            label: 'Quercetin Release (%)',
            data: [0, 55, 68, 76, 82, 86, 89, 92],
            borderColor: '#9C27B0',
            backgroundColor: 'rgba(156, 39, 176, 0.1)',
            tension: 0.4,
            borderWidth: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 14,
                weight: '600'
              }
            }
          },
          title: {
            display: true,
            text: 'Biphasic Release Profile: 72-Hour Cumulative Release',
            font: {
              size: 16,
              weight: '600'
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            title: {
              display: true,
              text: 'Cumulative Release (%)',
              font: {
                size: 14,
                weight: '600'
              }
            }
          },
          x: {
            title: {
              display: true,
              text: 'Time',
              font: {
                size: 14,
                weight: '600'
              }
            }
          }
        }
      }
    });
  }
  
  // Chart 2: Comparative Effectiveness (Slide 10)
  const comparisonCtx = document.getElementById('comparisonChart');
  if (comparisonCtx) {
    new Chart(comparisonCtx, {
      type: 'bar',
      data: {
        labels: ['Healing Rate (%)', 'Time to Heal (weeks)', 'Pain Score (VAS)', 'Quality of Life', 'Scarring (%)'],
        datasets: [
          {
            label: 'Conventional Therapy',
            data: [57.33, 10.4, 6.2, 44.3, 5.3],
            backgroundColor: 'rgba(211, 47, 47, 0.7)',
            borderColor: '#D32F2F',
            borderWidth: 2
          },
          {
            label: 'Multi-Target Therapy',
            data: [81.33, 8.0, 4.7, 61.8, 4.0],
            backgroundColor: 'rgba(56, 142, 60, 0.7)',
            borderColor: '#388E3C',
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 14,
                weight: '600'
              }
            }
          },
          title: {
            display: true,
            text: 'Conventional vs. Multi-Target Therapy: Clinical Outcomes',
            font: {
              size: 16,
              weight: '600'
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                label += context.parsed.y;
                
                // Add units
                if (context.dataIndex === 0) label += '%';
                else if (context.dataIndex === 1) label += ' weeks';
                else if (context.dataIndex === 2) label += ' (0-10 scale)';
                else if (context.dataIndex === 4) label += '%';
                
                return label;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Value (units vary by metric)',
              font: {
                size: 14,
                weight: '600'
              }
            }
          }
        }
      }
    });
  }
}

// Print/Export functionality
window.print = function() {
  window.print();
};