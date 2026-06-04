export const allocations = [
  {
    id: 1,
    name: "Pappy Van Winkle 15 Year",
    distillery: "Buffalo Trace",
    proof: 107,
    msrp: 119.99,
    stores: [
      { name: "Total Wine – Nashville", city: "Nashville", state: "TN", status: "available", quantity: 2, date: "2026-06-01" },
      { name: "ABC Fine Wine – Orlando", city: "Orlando", state: "FL", status: "available", quantity: 1, date: "2026-06-03" },
    ],
  },
  {
    id: 2,
    name: "Buffalo Trace Antique Collection – William Larue Weller",
    distillery: "Buffalo Trace",
    proof: 128.2,
    msrp: 99.99,
    stores: [
      { name: "BevMo – Austin", city: "Austin", state: "TX", status: "available", quantity: 3, date: "2026-05-30" },
      { name: "Spec's – Houston", city: "Houston", state: "TX", status: "gone", quantity: 0, date: "2026-05-28" },
    ],
  },
  {
    id: 3,
    name: "George T. Stagg",
    distillery: "Buffalo Trace",
    proof: 134.9,
    msrp: 99.99,
    stores: [
      { name: "Julio's Liquors – Westborough", city: "Westborough", state: "MA", status: "available", quantity: 1, date: "2026-06-02" },
      { name: "Yankee Spirits – Sturbridge", city: "Sturbridge", state: "MA", status: "available", quantity: 2, date: "2026-06-04" },
    ],
  },
  {
    id: 4,
    name: "Old Rip Van Winkle 10 Year",
    distillery: "Buffalo Trace",
    proof: 107,
    msrp: 69.99,
    stores: [
      { name: "Liquor Barn – Louisville", city: "Louisville", state: "KY", status: "available", quantity: 4, date: "2026-06-04" },
    ],
  },
  {
    id: 5,
    name: "Thomas H. Handy Sazerac Rye",
    distillery: "Buffalo Trace",
    proof: 130.8,
    msrp: 99.99,
    stores: [
      { name: "Total Wine – Atlanta", city: "Atlanta", state: "GA", status: "available", quantity: 2, date: "2026-05-31" },
      { name: "Green's Beverages – Atlanta", city: "Atlanta", state: "GA", status: "gone", quantity: 0, date: "2026-05-29" },
    ],
  },
  {
    id: 6,
    name: "Blanton's Original Single Barrel",
    distillery: "Buffalo Trace",
    proof: 93,
    msrp: 64.99,
    stores: [
      { name: "Binnys – Chicago", city: "Chicago", state: "IL", status: "available", quantity: 6, date: "2026-06-03" },
      { name: "Sam's Wine – Chicago", city: "Chicago", state: "IL", status: "available", quantity: 3, date: "2026-06-04" },
      { name: "Warehouse Liquors – Chicago", city: "Chicago", state: "IL", status: "gone", quantity: 0, date: "2026-06-01" },
    ],
  },
  {
    id: 7,
    name: "Eagle Rare 17 Year",
    distillery: "Buffalo Trace",
    proof: 101,
    msrp: 99.99,
    stores: [
      { name: "Spec's – Dallas", city: "Dallas", state: "TX", status: "available", quantity: 1, date: "2026-06-02" },
    ],
  },
  {
    id: 8,
    name: "Van Winkle Special Reserve 12 Year",
    distillery: "Buffalo Trace",
    proof: 90.4,
    msrp: 79.99,
    stores: [
      { name: "ABC Fine Wine – Tampa", city: "Tampa", state: "FL", status: "available", quantity: 2, date: "2026-06-04" },
      { name: "Total Wine – Miami", city: "Miami", state: "FL", status: "gone", quantity: 0, date: "2026-06-01" },
    ],
  },
];

export const states = [...new Set(
  allocations.flatMap(a => a.stores.map(s => s.state))
)].sort();
