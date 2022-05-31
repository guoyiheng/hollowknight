import fs from 'fs'
const docsStr = `Productivity, resource use, and competitive interactions of Fraxinus uhdei in Hawaii uplands
Grassland establishment under varying resource availability: A test of positive and negative feedback
Response of a perennial grassland to nitrogen and phosphorus additions in sub-tropical, semi-arid Australia
Effects of nutrient limitation on aboveground carbon dynamics during tropical dry forest regeneration in Yucatan, Mexico
Additional carbon sequestration following repeated urea fertilization of second-growth Douglas-fir stands in western Washington
Nutrient additions to a tropical rain forest drive substantial soil carbon dioxide losses to the atmosphere
Nutrient limitation in a fire-derived, nitrogen-rich Hawaiian grassland
The influence of N addition on nutrient content, leaf carbon isotope ratio, and productivity in a Nothofagus forest during stand development
Microbial biomass and nitrogen cycling responses to fertilization and litter removal in young northern hardwood forests
Belowground carbon cycling in a humid tropical forest decreases with fertilization
Long-term effects of site preparation and fertilization on total soil CO2 efflux and heterotrophic respiration in a 33-year-old Pinus taeda L. plantation on the wet flats of the Virginia Lower Coastal Plain
The effects of management on soil and plant carbon sequestration in slash pine plantations
Interactive effects of atmospheric CO2 and soil-N availability on fine roots of Populus tremuloides
Fertilization effects on fineroot biomass, rhizosphere microbes and respiratory fluxes in hardwood forest soils
Ecosystem response to 15 years of chronic nitrogen additions at the Harvard Forest LTER, Massachusetts, USA
Nitrogen addition reduces soil respiration in a mature tropical forest in southern China
Effects of nutrient additions on ecosystem carbon cycle in a Puerto Rican tropical wet forest
Soil respiration, fine root production, and microbial biomass in cottonwood and loblolly pine plantations along a nitrogen fertilization gradient
Soil carbon storage, litterfall and CO2 efflux in fertilized and unfertilized larch (Larix leptolepis) plantations
Fine root production and turnover in Brazilian Eucalyptus plantations under contrasting nitrogen fertilization regimes
Development of ectomycorrhizas in model beech-spruce ecosystems on siliceous and calcareous soil: a 4-year experiment with atmospheric CO2 enrichment and nitrogen fertilization
Nitrogen and phosphorus dynamics for 13-year-old loblolly pine stands receiving complete competition control and annual N fertilizer
Ecosystem response to 15 years of chronic nitrogen additions at the Harvard Forest LTER, Massachusetts, USA
Soil respiration, fine root production, and microbial biomass in cottonwood and loblolly pine plantations along a nitrogen fertilization gradient
Effects of elevated CO2, N- fertilization, and season on survival of ponderosa pine fine roots
Root growth response to water and nutrients in the New Jersey Pinelands
Belowground carbon cycling in a humid tropical forest decreases with fertilization
Fine root growth and element concentrations of Norway spruce as affected by wood ash and liquid fertilization
Effects of nitrogen addi-tions on above- and belowground carbon dynamics in two tropical forests
Nutrient additions to a tropical rain forest drive substantial soil carbon dioxide losses to the atmosphere
The variable effects of soil nitrogen availability and insect herbivory on aboveground and belowground plant biomass in an old-field ecosystem
The effects of nitrogen and phosphorus availability on fine root dynamics in Hawaiian montane forests
Respiratory carbon use and carbon storage in mid-rotation loblolly pine (Pinus taeda L.) plantations: the effect of site resources on the stand carbon balance
Response of soil res- piration to simulated N deposition in a disturbed and a rehabilitated tropical forest in southern China
Nutrient limitation in three lowland tropical forests in southern China receiving high nitrogen deposition: insights from fine root responses to nutrient additions
Soil fertility and fine root dynamics in response to 4 years of nutrient (N, P, K) fertilization in a low- land tropical moist forest
Potas- sium, phosphorus, or nitrogen limit root allocation, tree growth, or litter production in a lowland tropical forest
Effects of simulated nitrogen deposition on soil active carbon pool and root biomass in Neosinocalamus affinis plantation, rainy area of West China
Fine root biomass, production and turnover in a fertilized Larix leptolepis plantation in central Korea
The effects of management on soil and plant carbon sequestration in slash pine plantations
The effect of limited availability of N or water on C allocation to fine roots and annual fine root turnover in Alnus incana and Salix viminalis
CO2 and N-fertilization effects on fine-root length, production, and mortality: a 4-year ponderosa pine study
Nitrogen addition reduces soil respiration in a mature tropical forest in southern China
Seedling growth response of two tropical tree spe- cies to nitrogen deposition in southern China`

// change str to array by new line
// const docs = docsStr.split('\n')
// fs.writeFileSync('./docs.json', JSON.stringify(docs))

export const docNames = [
  'Productivity, resource use, and competitive interactions of Fraxinus uhdei in Hawaii uplands',
  'Grassland establishment under varying resource availability: A test of positive and negative feedback',
  'Response of a perennial grassland to nitrogen and phosphorus additions in sub-tropical, semi-arid Australia',
  'Effects of nutrient limitation on aboveground carbon dynamics during tropical dry forest regeneration in Yucatan, Mexico',
  'Additional carbon sequestration following repeated urea fertilization of second-growth Douglas-fir stands in western Washington',
  'Nutrient additions to a tropical rain forest drive substantial soil carbon dioxide losses to the atmosphere',
  'Nutrient limitation in a fire-derived, nitrogen-rich Hawaiian grassland',
  'The influence of N addition on nutrient content, leaf carbon isotope ratio, and productivity in a Nothofagus forest during stand development',
  'Microbial biomass and nitrogen cycling responses to fertilization and litter removal in young northern hardwood forests',
  'Belowground carbon cycling in a humid tropical forest decreases with fertilization',
  'Long-term effects of site preparation and fertilization on total soil CO2 efflux and heterotrophic respiration in a 33-year-old Pinus taeda L. plantation on the wet flats of the Virginia Lower Coastal Plain',
  'The effects of management on soil and plant carbon sequestration in slash pine plantations',
  'Interactive effects of atmospheric CO2 and soil-N availability on fine roots of Populus tremuloides',
  'Fertilization effects on fineroot biomass, rhizosphere microbes and respiratory fluxes in hardwood forest soils',
  'Ecosystem response to 15 years of chronic nitrogen additions at the Harvard Forest LTER, Massachusetts, USA',
  'Nitrogen addition reduces soil respiration in a mature tropical forest in southern China',
  'Effects of nutrient additions on ecosystem carbon cycle in a Puerto Rican tropical wet forest',
  'Soil respiration, fine root production, and microbial biomass in cottonwood and loblolly pine plantations along a nitrogen fertilization gradient',
  'Soil carbon storage, litterfall and CO2 efflux in fertilized and unfertilized larch (Larix leptolepis) plantations',
  'Fine root production and turnover in Brazilian Eucalyptus plantations under contrasting nitrogen fertilization regimes',
  'Development of ectomycorrhizas in model beech-spruce ecosystems on siliceous and calcareous soil: a 4-year experiment with atmospheric CO2 enrichment and nitrogen fertilization',
  'Nitrogen and phosphorus dynamics for 13-year-old loblolly pine stands receiving complete competition control and annual N fertilizer',
  'Ecosystem response to 15 years of chronic nitrogen additions at the Harvard Forest LTER, Massachusetts, USA',
  'Soil respiration, fine root production, and microbial biomass in cottonwood and loblolly pine plantations along a nitrogen fertilization gradient',
  'Effects of elevated CO2, N- fertilization, and season on survival of ponderosa pine fine roots',
  'Root growth response to water and nutrients in the New Jersey Pinelands',
  'Belowground carbon cycling in a humid tropical forest decreases with fertilization',
  'Fine root growth and element concentrations of Norway spruce as affected by wood ash and liquid fertilization',
  'Effects of nitrogen addi-tions on above- and belowground carbon dynamics in two tropical forests',
  'Nutrient additions to a tropical rain forest drive substantial soil carbon dioxide losses to the atmosphere',
  'The variable effects of soil nitrogen availability and insect herbivory on aboveground and belowground plant biomass in an old-field ecosystem',
  'The effects of nitrogen and phosphorus availability on fine root dynamics in Hawaiian montane forests',
  'Respiratory carbon use and carbon storage in mid-rotation loblolly pine (Pinus taeda L.) plantations: the effect of site resources on the stand carbon balance',
  'Response of soil res- piration to simulated N deposition in a disturbed and a rehabilitated tropical forest in southern China',
  'Nutrient limitation in three lowland tropical forests in southern China receiving high nitrogen deposition: insights from fine root responses to nutrient additions',
  'Soil fertility and fine root dynamics in response to 4 years of nutrient (N, P, K) fertilization in a low- land tropical moist forest',
  'Potas- sium, phosphorus, or nitrogen limit root allocation, tree growth, or litter production in a lowland tropical forest',
  'Effects of simulated nitrogen deposition on soil active carbon pool and root biomass in Neosinocalamus affinis plantation, rainy area of West China',
  'Fine root biomass, production and turnover in a fertilized Larix leptolepis plantation in central Korea',
  'The effects of management on soil and plant carbon sequestration in slash pine plantations',
  'The effect of limited availability of N or water on C allocation to fine roots and annual fine root turnover in Alnus incana and Salix viminalis',
  'CO2 and N-fertilization effects on fine-root length, production, and mortality: a 4-year ponderosa pine study',
  'Nitrogen addition reduces soil respiration in a mature tropical forest in southern China',
  'Seedling growth response of two tropical tree spe- cies to nitrogen deposition in southern China',
]
