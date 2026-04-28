const img = (url) => `url("${url}")`;

const imageSet = {
  dawnWoman: img("https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"),
  warmMeditation: img("https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80"),
  forestCircle: img("https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80"),
  groupHug: img("https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80"),
  retreatBeach: img("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"),
  workshopRoom: img("https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80"),
  clayWorkshop: img("https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"),
  candleImmersion: img("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"),
  terraceMeditation: img("https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&w=1200&q=80"),
  founderBeach: img("https://images.unsplash.com/photo-1521805103424-d8f8430e893e?auto=format&fit=crop&w=1200&q=80"),
  spaStone: img("https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"),
  yogaStudio: img("https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"),
  cranio: img("https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80"),
  communityTable: img("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"),
  nourishingFood: img("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"),
  coupleWalking: img("https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=80"),
  serenePortrait: img("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"),
  smilingWoman: img("https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"),
  homeStudio: img("https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80"),
  membershipsHero: img("https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"),
  offeringsHero: img("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"),
  communityPanorama: img("https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1400&q=80"),
  meditatingHands: img("https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1200&q=80"),
};

export const homePage = {
  type: "home",
  heroTitle: "A softer way back to yourself.",
  heroBody:
    "Samah is a holistic wellness house for those seeking movement, recovery, emotional steadiness, and belonging in one deeply considered space.",
  heroCta: "Book a 15-minute call",
  heroImage: imageSet.dawnWoman,
  meditationImage: imageSet.warmMeditation,
  communityPanorama: imageSet.communityPanorama,
  forestCircle: imageSet.forestCircle,
  groupHug: imageSet.groupHug,
  terraceMeditation: imageSet.terraceMeditation,
  founderImage: imageSet.founderBeach,
  positioning: [
    { kicker: "Not just", title: "another Studio", visual: imageSet.yogaStudio },
    { kicker: "Not just", title: "another Spa", visual: imageSet.spaStone },
    { kicker: "Not yet", title: "another Clinic", visual: imageSet.serenePortrait },
    { kicker: "Nor a", title: "spiritual centre", visual: imageSet.homeStudio },
  ],
  waLines: [
    "When the body feels safe, it restores.",
    "When the mind is clear, it settles.",
    "When energy flows, it lightens.",
    "When the soul is heard, it aligns.",
    "When we feel connected, we belong.",
  ],
  pillars: [
    { symbol: "B", title: "Body & Rejuvenation", copy: "Return to ease within the body through movement, touch, and restorative practices." },
    { symbol: "M", title: "Mind & Emotions", copy: "Cultivate clarity, resilience, and emotional steadiness with guided therapeutic support." },
    { symbol: "E", title: "Energy & Prana", copy: "Restore subtle flow and inner vitality through gentle, regulating modalities." },
    { symbol: "S", title: "Soul & Spirit", copy: "Reconnect with meaning, ritual, stillness, and quiet expansion." },
    { symbol: "C", title: "Community", copy: "Feel seen, held, and nourished through circles, events, and collective care." },
  ],
  whatsNew: [
    "Newly opened class batches",
    "Upcoming circles and workshops",
    "Seasonal retreats",
    "Fresh therapeutic offerings",
    "Community gatherings",
    "Limited-seat immersions",
  ],
  events: [
    { tag: "Retreat", title: "Sunrise restoration", copy: "Beachside breathwork, slow movement, and reflective rest.", date: "14 Apr, 2026", image: imageSet.retreatBeach },
    { tag: "Circle", title: "Evening belonging circle", copy: "Soft conversation and embodied reflection for women in transition.", date: "20 Apr, 2026", image: imageSet.workshopRoom },
    { tag: "Workshop", title: "Hands that heal", copy: "A tactile workshop in nervous system soothing and grounding rituals.", date: "27 Apr, 2026", image: imageSet.clayWorkshop },
    { tag: "Immersion", title: "Quiet reset immersion", copy: "A candlelit evening of restorative yoga, sound, and silence.", date: "2 May, 2026", image: imageSet.candleImmersion },
  ],
  indulgence: [
    { title: "Structured Offerings", copy: "Consistent practices to ground your everyday.", href: "/offerings", image: imageSet.yogaStudio },
    { title: "Memberships", copy: "A holistic rhythm of care across every dimension.", href: "/memberships", image: imageSet.meditatingHands },
    { title: "Pathways", copy: "Guided journeys for specific goals and transformations.", href: "/home#pathways", image: imageSet.coupleWalking },
    { title: "Events", copy: "Circles, workshops, retreats, and gatherings for connection.", href: "/home#events", image: imageSet.workshopRoom },
  ],
  differencePoints: [
    "Integrated care instead of fragmented appointments",
    "Curated pathways, not generic class bundles",
    "Science-aware and body-led support",
    "Progress you can feel in daily life",
    "Small-group intimacy and genuine belonging",
    "Built for sustainable, long-term change",
  ],
  comparisonRows: [
    { aspect: "Holistic approach across mind, body, energy, and soul", samah: "Included", other: "Rare" },
    { aspect: "Integrated wellness in one space", samah: "Included", other: "Limited" },
    { aspect: "Personalized pathways", samah: "Included", other: "Sometimes" },
    { aspect: "Root-cause focus", samah: "Included", other: "Sometimes" },
    { aspect: "Community and shared healing spaces", samah: "Included", other: "Rare" },
    { aspect: "Lifestyle integration beyond sessions", samah: "Included", other: "Uncommon" },
  ],
  testimonial: {
    quote: "For the first time, my body feels supported instead of pushed.",
    name: "Sophia Loren",
    city: "Coimbatore",
  },
  communityCards: [
    { title: "Stories of recovery", copy: "Real voices from those rediscovering rest and resilience.", image: imageSet.serenePortrait },
    { title: "Gentle leadership", copy: "Practitioners who guide with warmth, clarity, and depth.", image: imageSet.smilingWoman },
    { title: "Slow rituals", copy: "Practices that make wellbeing feel livable and grounded.", image: imageSet.warmMeditation },
    { title: "Shared joy", copy: "Community moments that remind us healing does not happen alone.", image: imageSet.communityTable },
  ],
};

export const offeringsPage = {
  type: "offerings",
  heroTitle: "Samah experiences. Structured offerings.",
  heroBody:
    "Wellbeing is not approached in parts here. Our offerings are designed across five dimensions so you can enter where you are and expand gently from there.",
  heroCta: "Book a trial session now",
  heroImage: imageSet.offeringsHero,
  sharedImage: imageSet.spaStone,
  dimensions: [
    {
      title: "Body & Rejuvenation",
      lead: "Return to your body as a place of strength, ease, and vitality.",
      copy: "From movement to therapeutic touch, this dimension is about reconnecting with your physical self and feeling truly alive again.",
      downloadLabel: "Body",
      categories: [
        {
          name: "Body",
          description: "Movement practices designed to support grounding, stamina, and graceful recovery.",
          image: imageSet.yogaStudio,
          pricing: [
            { label: "Group session", value: "₹499" },
            { label: "1-month offline", value: "₹3499" },
            { label: "1:1 online", value: "₹750" },
          ],
        },
        {
          name: "Rejuvenation",
          description: "Slow, restorative bodywork that helps the nervous system soften and the body recalibrate.",
          image: imageSet.spaStone,
          pricing: [
            { label: "Single session", value: "₹2500" },
            { label: "3-session pack", value: "₹6900" },
            { label: "6-session pack", value: "₹12900" },
          ],
        },
        {
          name: "Ayurvedic massages",
          description: "Traditional touch therapies for circulation, restoration, and deeper body awareness.",
          image: imageSet.cranio,
          pricing: [
            { label: "60 mins", value: "₹2800" },
            { label: "90 mins", value: "₹3600" },
            { label: "Package", value: "Custom" },
          ],
        },
      ],
    },
    {
      title: "Mind & Emotions",
      lead: "Understand your inner world and move through it with clarity and compassion.",
      copy: "Led by thoughtful practitioners, this space supports emotional resilience, mental clarity, and deeper self-awareness.",
      downloadLabel: "Brain Spa",
      categories: [
        {
          name: "Brain Spa",
          description: "A gentle reset for overstimulation, helping the mind settle and the body feel safe again.",
          image: imageSet.warmMeditation,
          pricing: [
            { label: "1 session", value: "₹1500" },
            { label: "3 sessions", value: "₹4200" },
            { label: "8 sessions", value: "₹10800" },
          ],
        },
        {
          name: "One-on-one therapy",
          description: "Deep listening and therapeutic guidance for emotional regulation and meaningful change.",
          image: imageSet.serenePortrait,
          pricing: [
            { label: "50 mins", value: "₹1800" },
            { label: "4-session pack", value: "₹6800" },
            { label: "Online", value: "Available" },
          ],
        },
        {
          name: "Community circles",
          description: "Facilitated group spaces for sharing, reflection, and feeling less alone.",
          image: imageSet.communityTable,
          pricing: [
            { label: "Per circle", value: "₹500" },
            { label: "Monthly pass", value: "₹1800" },
            { label: "Members", value: "Discounted" },
          ],
        },
      ],
    },
    {
      title: "Energy & Prana",
      lead: "Shift what cannot be seen, yet is always felt.",
      copy: "This dimension works with subtle energy to restore flow, balance, and vitality at a deeper level.",
      downloadLabel: "Sacral Therapy",
      categories: [
        {
          name: "Biodynamic cranio sacral therapy",
          description: "A subtle, calming therapy that supports deep regulation and release.",
          image: imageSet.cranio,
          pricing: [
            { label: "60 mins", value: "₹2500" },
            { label: "3-session pack", value: "₹6900" },
            { label: "6-session pack", value: "₹12900" },
          ],
        },
        {
          name: "Healing therapy",
          description: "Energy-based sessions that create spaciousness, calm, and renewed internal flow.",
          image: imageSet.warmMeditation,
          pricing: [
            { label: "45 mins", value: "₹1800" },
            { label: "3-session pack", value: "₹4800" },
            { label: "Remote", value: "Available" },
          ],
        },
      ],
    },
    {
      title: "Soul & Spirit",
      lead: "Reconnect with stillness, meaning, and something beyond yourself.",
      copy: "These offerings invite you inward into awareness, presence, and quiet expansion.",
      downloadLabel: "Meditations",
      categories: [
        {
          name: "Guided meditations",
          description: "Short, grounding experiences that cultivate inner steadiness and gentle focus.",
          image: imageSet.meditatingHands,
          pricing: [
            { label: "30 mins", value: "₹499" },
            { label: "3-session pack", value: "₹1350" },
            { label: "6-session pack", value: "₹2400" },
          ],
        },
        {
          name: "Awareness through body",
          description: "Somatic-led spiritual inquiry through slow movement and breath.",
          image: imageSet.dawnWoman,
          pricing: [
            { label: "Group class", value: "₹700" },
            { label: "Workshop", value: "₹2200" },
            { label: "Members", value: "Included in select plans" },
          ],
        },
      ],
    },
    {
      title: "Social Connection & Community",
      lead: "Heal, grow, and celebrate together.",
      copy: "At Samah, community is not an add-on. It is part of the foundation of transformation.",
      downloadLabel: "Community",
      categories: [
        {
          name: "Circles",
          description: "Shared spaces of reflection, support, and meaningful conversation.",
          image: imageSet.communityTable,
          pricing: [
            { label: "Per circle", value: "₹500" },
            { label: "3-session pass", value: "₹1350" },
            { label: "Members", value: "Discounted" },
          ],
        },
        {
          name: "Sauna & steam",
          description: "Warm recovery rituals that help the body unwind and soften.",
          image: imageSet.spaStone,
          pricing: [
            { label: "Single use", value: "₹1200" },
            { label: "4-use pass", value: "₹4200" },
            { label: "Members", value: "Included in select plans" },
          ],
        },
        {
          name: "Rentable space",
          description: "Intentional spaces for private circles, healing gatherings, and community events.",
          image: imageSet.homeStudio,
          pricing: [
            { label: "Hourly", value: "₹2500" },
            { label: "Half day", value: "₹9000" },
            { label: "Custom", value: "Available" },
          ],
        },
      ],
    },
  ],
};

export const membershipsPage = {
  type: "memberships",
  heroTitle: "Samah Living memberships",
  heroBody:
    "Rooted in the philosophy of harmony, Samah memberships offer a lifestyle of integrated care rather than a narrow package of sessions.",
  heroCta: "Explore memberships",
  heroImage: imageSet.membershipsHero,
  comparison: {
    left: [
      "Yoga memberships",
      "Gym memberships",
      "Therapy packages",
      "Movement practices",
      "Mind and therapy sessions",
      "Recovery facilities",
      "Health coaching guidance",
      "Rejuvenation therapies",
      "Circles and community experiences",
    ],
    right: [
      "Mind and therapy sessions",
      "Recovery facilities",
      "Health coaching guidance",
      "Rejuvenation therapies",
      "Circles and community experiences",
      "Integrated access across body and mind",
      "Seasonal rituals and wellness gatherings",
      "Everything works together as one ecosystem",
    ],
  },
  memberships: [
    { title: "Full Access", copy: "For those who want complete holistic care across the Samah ecosystem." },
    { title: "Essential Access", copy: "For those exploring a steady, balanced rhythm of wellness." },
    { title: "Body Based", copy: "For movement and physical wellness enthusiasts seeking structure." },
    { title: "Mind Based", copy: "For those prioritizing therapy, meditation, and self-reflection." },
  ],
  snapshot: {
    columns: ["Membership", "Body", "Mind", "Circles", "Facilities", "Coaching", "Rejuvenation"],
    rows: [
      { name: "Full Access", values: ["8", "2", "2", "5", "2", "2"] },
      { name: "Light Access", values: ["4", "1", "1", "3", "1", "1"] },
      { name: "Body Based", values: ["8", "-", "-", "5", "1", "2"] },
      { name: "Mind Based", values: ["-", "4", "2", "2", "1", "-"] },
    ],
  },
  customize: [
    "Additional movement sessions",
    "Therapy sessions",
    "Rejuvenation treatments",
    "Coaching consultations",
    "Circle events",
  ],
  audiences: [
    { symbol: "S", title: "Professionals dealing with stress" },
    { symbol: "W", title: "Individuals seeking holistic wellness" },
    { symbol: "R", title: "People recovering from burnout" },
    { symbol: "M", title: "Movement enthusiasts" },
    { symbol: "I", title: "Mindfulness seekers" },
    { symbol: "C", title: "Community-oriented individuals" },
  ],
  community: [
    { size: "small", title: "Wellbeing grows stronger together", image: imageSet.retreatBeach },
    { size: "small", title: "Meaningful circles", image: imageSet.groupHug },
    { size: "small", title: "Shared rituals", image: imageSet.workshopRoom },
    { size: "small", title: "Workshops & retreats", image: imageSet.homeStudio },
    { size: "small", title: "Nourishing food experiences", image: imageSet.nourishingFood },
    { size: "wide", title: "This is not just a space.", copy: "It is a community you belong to.", image: imageSet.communityTable },
  ],
};
