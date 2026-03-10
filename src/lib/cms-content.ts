import 'server-only'

import { getPayload } from '@/lib/payload'

type AnyRecord = Record<string, unknown>
type PayloadClient = Awaited<ReturnType<typeof getPayload>>
type MediaType = 'image' | 'video' | 'youtube'

export type GalleryMediaItem = {
  id: string
  title: string
  description?: string
  thumbnail: string
  type: MediaType
  src: string
  category: string
}

export type GalleryCollectionItem = {
  id: string
  title: string
  description?: string
  thumbnail: string
  items: GalleryMediaItem[]
  category: string
  isCollection: true
}

export type GalleryItem = GalleryMediaItem | GalleryCollectionItem

const fallbackHomeData = {
  hero: {
    tagline: 'മലബാറിന്റെ സ്വന്തം',
    titlePart1: 'MALABAR',
    titlePart2: 'CHALLENGERS',
    videoUrl: '/To_discover_Maradona_s_of_India_1080P.webm',
  },
  technicalDivide: {
    index: '01 // THE INSTITUTION',
    titleLine1: 'ARCHITECTS',
    titleLine2: 'OF THE',
    titleLine3: 'PITCH',
    description:
      "We don't just build teams; we engineer lineages. Every player at MCFC is a data point in a legacy that spans from the EMS Stadium to the heart of Buenos Aires.",
    image: {
      url: '/ground-day.png',
    },
  },
  partnership: {
    title: 'EL SEMILLERO DEL MUNDO',
    content:
      'We have concluded a franchise agreement with Argentinos Juniors, a premier division league club of Argentina. Their academy discovered Maradona at age 9 and groomed him until he was 16. Considered the best grassroots development academy in Latin America.',
    linkUrl:
      'https://argentinosjuniors.com.ar/noticias/captacion/sigue-creciendo-el-convenio-de-colaboracion-deportiva-en-india/',
  },
  stats: [
    { label: 'FOUNDATION', value: 'ARG JRS' },
    { label: 'LEGACY', value: 'MARADONA' },
    { label: 'DISCIPLINE', value: 'ELITE' },
  ],
  academyOffers: [
    {
      title: 'Expert coaches',
      desc: 'Curated training by Argentinos Juniors experts from the same nursery that groomed Maradona.',
      icon: 'Brain',
      image:
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop',
      tag: 'TECHNICAL LEADERSHIP',
    },
    {
      title: 'Monitoring players',
      desc: 'Continuous analysis by AJ coaches in Buenos Aires.',
      icon: 'Microscope',
      image:
        'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1200&auto=format&fit=crop',
      tag: 'PERFORMANCE ANALYTICS',
    },
    {
      title: 'Indian coaches',
      desc: 'AJ-trained Indian coaches for local synchronization.',
      icon: 'Users',
      image:
        'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80',
      tag: 'LOCAL INTEGRATION',
    },
    {
      title: 'Training on grass turf',
      desc: 'Premium training experience on professional-grade natural grass pitches.',
      icon: 'Trees',
      image: '/ground-day.png',
      tag: 'ELITE INFRASTRUCTURE',
    },
    {
      title: 'Weekly matches',
      desc: 'Regular competitive fixtures with regional academies.',
      icon: 'Zap',
      image:
        'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
      tag: 'COMPETITIVE EXPOSURE',
    },
    {
      title: 'Intensive training',
      desc: 'High-performance training sessions designed for elite physical and technical development.',
      icon: 'Dumbbell',
      image:
        'https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1200&auto=format&fit=crop',
      tag: 'ATHLETIC DEVELOPMENT',
    },
    {
      title: 'Diet plan',
      desc: 'Personalized diet plans for physical development.',
      icon: 'Coffee',
      image:
        'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop',
      tag: 'SPORTS NUTRITION',
    },
    {
      title: 'Transport facilities',
      desc: 'Dedicated safe transport options for academy players.',
      icon: 'Bus',
      image:
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
      tag: 'PLAYER LOGISTICS',
    },
    {
      title: 'Parental interaction',
      desc: 'Periodic interaction with parents via data reports.',
      icon: 'HeartPulse',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
      tag: 'FAMILY ENGAGEMENT',
    },
    {
      title: 'Certificates',
      desc: 'Formal certification after every two-year cycle.',
      icon: 'GraduationCap',
      image:
        'https://images.unsplash.com/photo-1578262825743-a4e402caab76?q=80&w=1200&auto=format&fit=crop',
      tag: 'OFFICIAL RECOGNITION',
    },
  ],
  cta: {
    badge: 'GET IN TOUCH',
    heading: 'READY TO TRANSFORM YOUR GAME?',
    description:
      'Join the premier football academy in Kerala. Our expert coaches are ready to help you achieve your full potential through world-class training methodologies.',
    buttonText: 'Enquire Now',
    buttonLink: '/contact',
    stats: [
      { value: '500+', label: 'Players Trained' },
      { value: '50+', label: 'Expert Coaches' },
      { value: '10+', label: 'Tournament Wins' },
      { value: '100%', label: 'Player Satisfaction' },
    ],
  },
}

const fallbackTestimonials = [
  {
    quote:
      "My son has grown not just as a footballer, but as a person. The training methodology is world-class and the coaches truly care about each player's development.",
    name: 'Rajesh Kumar',
    role: 'Parent',
    location: 'Kozhikode',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'The partnership with Argentinos Juniors brings authentic Argentine football philosophy to Kerala. It is an incredible opportunity for young players to learn from the best.',
    name: 'Anil Kumar',
    role: 'Parent',
    location: 'Malappuram',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'The facilities are top-notch and the focus on holistic development sets MCFC apart. My daughter loves her training sessions and has improved tremendously.',
    name: 'Sindhu Nair',
    role: 'Parent',
    location: 'Kannur',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200&auto=format&fit=crop',
  },
]

const fallbackAboutData = {
  hero: {
    title: 'ARCHITECTS',
    philosophy:
      'To create a world-class football training academy in Kozhikode and form a truly professional senior football team.',
  },
  visionTitle: 'Vision 2031',
  missionTitle: 'Our Mission',
  visionItems: [
    {
      icon: 'Globe',
      text: 'Create an ideal ecosystem for the development of football in India to produce world-class professional footballers.',
    },
    {
      icon: 'Flame',
      text: 'Rejuvenate the great football tradition of Calicut, Malabar, Kerala and India.',
    },
    {
      icon: 'Heart',
      text: 'Convert passion for football into a fanbase for our club.',
    },
  ],
  missionItems: [
    {
      icon: 'GraduationCap',
      text: 'Establish a world-class grassroots-level academy with the help of the AJ Academy.',
    },
    {
      icon: 'Target',
      text: 'Develop the best coaching practices suitable for Indian conditions.',
    },
    {
      icon: 'Users',
      text: 'Instill discipline in trainees and groom them to be responsible citizens.',
    },
  ],
  milestones: [],
  boardTitle: 'Board of Directors',
  board: [],
  partnersTitle: 'Our Partners',
  partners: [
    {
      name: 'Argentinos Juniors',
      logoUrl: '/argentina-jrs.png',
      link: 'https://argentinosjuniors.com.ar/',
    },
    {
      name: 'Bharathiya Vidya Bhavan',
      logoUrl: '/bhavan.png',
      link: 'https://www.bhavans.info/',
    },
    {
      name: 'EVOSTARTER',
      logoUrl: '/evostarter.png',
      link: 'https://evostarter.com/',
    },
  ],
}

const fallbackPlayers = [
  {
    id: '1',
    name: 'Rahul K.',
    pos: 'Forward',
    age: 17,
    height: "5'10\"",
    weight: '68kg',
    hometown: 'Kozhikode',
    achievements: ['Top Scorer 2025', 'Best Player Award'],
    stats: { pace: 85, shot: 78, tac: 62 },
    bio: 'Promising young talent with excellent finishing abilities.',
    img: '/academy-player.png',
  },
  {
    id: '2',
    name: 'Vishnu T.',
    pos: 'Midfielder',
    age: 16,
    height: "5'8\"",
    weight: '65kg',
    hometown: 'Kannur',
    achievements: ['Most Assists', 'Player of the Month'],
    stats: { pace: 80, shot: 72, tac: 88 },
    bio: 'Creative midfielder with excellent vision and passing.',
    img: '/Skandan.png',
  },
]

const fallbackCoaches = [
  {
    id: '1',
    name: 'John Smith',
    role: 'Head Coach',
    subtitle: 'Former Premier League Player',
    origin: 'England',
    experience: '15+ years',
    age: 45,
    bio: 'Highly experienced coach with background in top European leagues.',
    achievements: ['League Winner', 'Coach of the Year'],
    specialty: 'Tactical Development',
    image: '/Paul George.png',
  },
]

const fallbackCamps = [
  {
    id: '1',
    name: 'Elite Training Camp',
    code: 'ELITE',
    tagline: 'Intensive training for advanced players',
    description:
      'Our flagship camp for players looking to take their game to the next level.',
    ageGroup: '14-18 years',
    timing: '9:00 AM - 5:00 PM',
    location: 'Kozhikode',
    address: 'EMS Stadium, Kozhikode',
    contact: '+91 9544 9544 00',
    features: [
      'Advanced Tactics',
      'Physical Conditioning',
      'Video Analysis',
      'Match Simulation',
    ],
    image: '/ground-day.png',
    mapEmbed: '',
  },
]

const fallbackGallery: GalleryItem[] = [
  {
    id: '1',
    title: 'Training Session',
    description: 'Morning practice at EMS Stadium',
    thumbnail: '/ground-day.png',
    type: 'image' as const,
    src: '/ground-day.png',
    category: 'training',
  },
]

const fallbackMatches = [
  {
    id: '1',
    competition: 'KERALA PRO LEAGUE',
    home: 'MCFC',
    away: 'Kochi FC',
    time: '15:00',
    date: 'MAR 15, 2026',
    venue: 'EMS STADIUM',
    status: 'UPCOMING',
    score: '- VS -',
    videoUrl: null as string | null,
    homeScorers: [] as string[],
    awayScorers: [] as string[],
  },
]

const fallbackJobs = [
  {
    id: '1',
    title: 'Football Coach',
    category: 'Coaching',
    type: 'Full-time',
    location: 'Kozhikode, Kerala',
    salary: 'Competitive',
    description:
      'Join our coaching team to help develop the next generation of footballers.',
    requirements: ['UEFA B License preferred', 'Experience with youth teams'],
    responsibilities: [
      'Training sessions',
      'Match preparation',
      'Player development',
    ],
    benefits: ['Health insurance', 'Professional development'],
  },
]

const fallbackAnnouncements = [
  {
    id: 1,
    category: 'Technical Update',
    tagColor: 'bg-primary text-background',
    title: 'First Team Infrastructure Upgrade',
    date: 'MAR 06, 2026',
    readTime: '4 Min Read',
    excerpt:
      'The Semillero Bridge methodology reaches a new milestone today with the completion of our high-performance technical center in Kozhikode.',
    content:
      'The Semillero Bridge methodology reaches a new milestone today with the completion of our high-performance technical center in Kozhikode.',
    image:
      'https://images.unsplash.com/photo-1518605368461-1ee7c68cd462?q=80&w=800&auto=format&fit=crop',
  },
]

const positionMap: Record<string, string> = {
  GK: 'Goalkeeper',
  DF: 'Defender',
  MF: 'Midfielder',
  FW: 'Forward',
}

const jobTypeMap: Record<string, string> = {
  'full-time': 'Full-time',
  'part-time': 'Part-time',
  contract: 'Contract',
}

const matchStatusMap: Record<string, string> = {
  upcoming: 'UPCOMING',
  live: 'LIVE',
  finished: 'FINISHED',
}

const toMediaType = (value: unknown): MediaType => {
  if (value === 'video' || value === 'youtube') return value
  return 'image'
}

const parseString = (value: unknown, fallback = ''): string =>
  typeof value === 'string' && value.trim().length > 0 ? value.trim() : fallback

const normalizeTagline = (value: string): string => {
  const english = 'malabarinte swantham'
  const normalized = value.trim()
  if (normalized.toLowerCase() === english) return 'മലബാറിന്റെ സ്വന്തം'
  if (normalized === 'മലബാറിന്റെ സ്വന്തം.') return 'മലബാറിന്റെ സ്വന്തം'
  return normalized
}

const normalizeTitle = (value: unknown): string =>
  typeof value === 'string' ? value.trim().toLowerCase() : ''

const academyOfferImageFallbacks: Record<string, string> = {
  'expert coaches':
    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop',
  'monitoring players':
    'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1200&auto=format&fit=crop',
  'indian coaches':
    'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80',
  'training on grass turf': '/ground-day.png',
  'weekly matches':
    'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
  'intensive training':
    'https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1200&auto=format&fit=crop',
  'diet plan':
    'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop',
  'transport facilities':
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
  'parental interaction':
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
  'interaction with parents':
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
  certificates:
    'https://images.unsplash.com/photo-1578262825743-a4e402caab76?q=80&w=1200&auto=format&fit=crop',
}

const fallbackAcademyImage = (title: string): string =>
  academyOfferImageFallbacks[normalizeTitle(title)] ||
  academyOfferImageFallbacks['expert coaches']

const parseNumber = (value: unknown, fallback = 0): number =>
  typeof value === 'number' && Number.isFinite(value) ? value : fallback

const parseDateLabel = (value: unknown): string => {
  if (typeof value !== 'string') return 'TBD'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'TBD'
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
    .format(date)
    .toUpperCase()
}

const parseTimeLabel = (value: unknown): string => {
  if (typeof value !== 'string') return 'TBD'
  if (value.includes(':')) return value
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'TBD'
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date)
}

const mediaUrl = (media: unknown, fallback: string): string => {
  if (typeof media === 'string' && media.length > 0) return media
  if (media && typeof media === 'object') {
    const record = media as AnyRecord
    if (typeof record.url === 'string' && record.url.length > 0) return record.url
    if (typeof record.filename === 'string' && record.filename.length > 0) {
      return `/api/media/file/${record.filename}`
    }
  }
  return fallback
}

const youtubeToEmbed = (value: unknown): string | null => {
  if (typeof value !== 'string' || value.length === 0) return null
  if (value.includes('youtube.com/embed/')) return value
  const idMatch =
    value.match(/[?&]v=([a-zA-Z0-9_-]+)/)?.[1] ||
    value.match(/youtu\.be\/([a-zA-Z0-9_-]+)/)?.[1]
  if (idMatch) return `https://www.youtube.com/embed/${idMatch}`
  return value
}

const richTextToPlain = (value: unknown): string => {
  if (!value) return ''
  if (typeof value === 'string') return value
  if (Array.isArray(value)) return value.map(richTextToPlain).join(' ').trim()
  if (typeof value === 'object') {
    const record = value as AnyRecord
    if (typeof record.text === 'string') return record.text
    if (Array.isArray(record.children)) {
      return record.children.map(richTextToPlain).join(' ').trim()
    }
    if (record.root && Array.isArray((record.root as AnyRecord).children)) {
      return ((record.root as AnyRecord).children as unknown[])
        .map(richTextToPlain)
        .join(' ')
        .trim()
    }
    return Object.values(record).map(richTextToPlain).join(' ').trim()
  }
  return ''
}

const withPayload = async <T>(
  runner: (payload: PayloadClient) => Promise<T>,
  fallback: T,
) => {
  try {
    const payload = await getPayload()
    if (!payload) return fallback
    return await runner(payload)
  } catch (error) {
    console.warn('[withPayload-Runtime] Falling back due to Payload error:', error instanceof Error ? error.message : error)
    return fallback
  }
}

export const getHomePageData = async () =>
  withPayload(async (payload) => {
    const [home, testimonialResponse] = await Promise.all([
      payload.findGlobal({ slug: 'home', depth: 2 }),
      payload.find({
        collection: 'testimonials',
        depth: 1,
        limit: 30,
      }),
    ])

    const homeData = {
      ...fallbackHomeData,
      hero: {
        ...fallbackHomeData.hero,
        ...(home?.hero || {}),
        tagline: normalizeTagline(
          parseString(home?.hero?.tagline, fallbackHomeData.hero.tagline),
        ),
      },
      technicalDivide: {
        ...fallbackHomeData.technicalDivide,
        ...(home?.technicalDivide || {}),
        image: {
          url: mediaUrl(
            home?.technicalDivide?.image,
            fallbackHomeData.technicalDivide.image.url,
          ),
        },
      },
      partnership: {
        ...fallbackHomeData.partnership,
        ...(home?.partnership || {}),
      },
      stats:
        Array.isArray(home?.stats) && home.stats.length > 0
          ? home.stats.map((item: AnyRecord) => ({
            label: parseString(item?.label, ''),
            value: parseString(item?.value, ''),
          }))
          : fallbackHomeData.stats,
      academyOffers:
        Array.isArray(home?.academyOffers) && home.academyOffers.length > 0
          ? home.academyOffers.map((item: AnyRecord) => {
            const title = parseString(item?.title, '')
            return {
              title,
              desc: parseString(item?.desc, ''),
              icon: parseString(item?.icon, 'Users'),
              image: mediaUrl(item?.image, fallbackAcademyImage(title)),
              tag: parseString(item?.tag, ''),
            }
          })
          : fallbackHomeData.academyOffers,
      cta: {
        ...fallbackHomeData.cta,
        ...(home?.cta || {}),
        stats:
          Array.isArray(home?.cta?.stats) && home.cta.stats.length > 0
            ? home.cta.stats.map((item: AnyRecord) => ({
              value: parseString(item?.value, ''),
              label: parseString(item?.label, ''),
            }))
            : fallbackHomeData.cta.stats,
      },
    }

    const testimonials =
      Array.isArray(testimonialResponse?.docs) && testimonialResponse.docs.length > 0
        ? testimonialResponse.docs.map((doc: AnyRecord) => ({
          quote: parseString(doc?.quote, ''),
          name: parseString(doc?.name, ''),
          role: parseString(doc?.role, ''),
          location: parseString(doc?.location, ''),
          avatar: mediaUrl(doc?.avatar, fallbackTestimonials[0].avatar),
        }))
        : fallbackTestimonials

    return { homeData, testimonials }
  }, { homeData: fallbackHomeData, testimonials: fallbackTestimonials })

export const getAboutPageData = async () =>
  withPayload(async (payload) => {
    const about = await payload.findGlobal({ slug: 'about', depth: 2 })

    const aboutData = {
      ...fallbackAboutData,
      ...(about || {}),
      hero: {
        ...(about?.hero || {}),
      },
      visionItems:
        Array.isArray(about?.visionItems) && about.visionItems.length > 0
          ? about.visionItems
          : fallbackAboutData.visionItems,
      missionItems:
        Array.isArray(about?.missionItems) && about.missionItems.length > 0
          ? about.missionItems
          : fallbackAboutData.missionItems,
      milestones: Array.isArray(about?.milestones) ? about.milestones : [],
      board: Array.isArray(about?.board)
        ? about.board.map((member: AnyRecord) => ({
          ...member,
          imageUrl: mediaUrl(member?.image, ''),
        }))
        : [],
      partners: Array.isArray(about?.partners)
        ? about.partners.map((partner: AnyRecord) => ({
          name: parseString(partner?.name, ''),
          logoUrl: mediaUrl(partner?.logoUrl ?? partner?.logo, ''),
          link: parseString(partner?.link, ''),
        }))
        : fallbackAboutData.partners,
    }

    return {
      aboutData,
      visionItems: aboutData.visionItems,
      missionItems: aboutData.missionItems,
      partners: aboutData.partners,
    }
  }, {
    aboutData: fallbackAboutData,
    visionItems: fallbackAboutData.visionItems,
    missionItems: fallbackAboutData.missionItems,
    partners: fallbackAboutData.partners,
  })

export const getPlayersData = async () =>
  withPayload(async (payload) => {
    const response = await payload.find({
      collection: 'players',
      depth: 2,
      limit: 200,
      sort: 'number',
    })
    if (!Array.isArray(response?.docs) || response.docs.length === 0) return fallbackPlayers

    return response.docs.map((doc: AnyRecord, index: number) => ({
      id: String(parseNumber(doc?.number, index + 1)),
      name: parseString(doc?.name, `Player ${index + 1}`),
      pos: positionMap[parseString(doc?.position, 'FW')] || 'Forward',
      age: parseNumber(doc?.age, 16),
      height: parseString(doc?.height, '-'),
      weight: parseString(doc?.weight, '-'),
      hometown: parseString(doc?.hometown, 'Kozhikode'),
      achievements: Array.isArray(doc?.achievements)
        ? doc.achievements
          .map((item: AnyRecord) => parseString(item?.title, ''))
          .filter(Boolean)
        : [],
      stats: (() => {
        const stats = (doc?.stats as AnyRecord | undefined) || {}
        return {
          pace: parseNumber(stats.pace, 70),
          shot: parseNumber(stats.shot, 70),
          tac: parseNumber(stats.tac, 70),
        }
      })(),
      bio: parseString(doc?.bio, ''),
      img: mediaUrl(doc?.image, '/academy-player.png'),
    }))
  }, fallbackPlayers)

export const getCoachesData = async () =>
  withPayload(async (payload) => {
    const response = await payload.find({
      collection: 'coaches',
      depth: 2,
      limit: 200,
      sort: 'name',
    })
    if (!Array.isArray(response?.docs) || response.docs.length === 0) return fallbackCoaches

    return response.docs.map((doc: AnyRecord, index: number) => ({
      id: String(index + 1),
      name: parseString(doc?.name, `Coach ${index + 1}`),
      role: parseString(doc?.role, 'Coach'),
      subtitle: parseString(doc?.subtitle, ''),
      origin: parseString(doc?.origin, ''),
      experience: parseString(doc?.experience, ''),
      age: parseNumber(doc?.age, 40),
      bio: parseString(doc?.bio, ''),
      achievements: Array.isArray(doc?.achievements)
        ? doc.achievements
          .map((item: AnyRecord) => parseString(item?.title, ''))
          .filter(Boolean)
        : [],
      specialty: parseString(doc?.specialty, 'Technical'),
      image: mediaUrl(doc?.image, '/academy-player.png'),
    }))
  }, fallbackCoaches)

export const getCampsData = async () =>
  withPayload(async (payload) => {
    const response = await payload.find({
      collection: 'camps',
      depth: 2,
      limit: 200,
      sort: 'name',
    })
    if (!Array.isArray(response?.docs) || response.docs.length === 0) return fallbackCamps

    return response.docs.map((doc: AnyRecord, index: number) => ({
      id: String(index + 1),
      name: parseString(doc?.name, `Camp ${index + 1}`),
      code: parseString(doc?.code, 'CAMP'),
      tagline: parseString(doc?.tagline, ''),
      description: parseString(doc?.description, ''),
      ageGroup: parseString(((doc?.details as AnyRecord | undefined) || {}).ageGroup, ''),
      timing: parseString(((doc?.details as AnyRecord | undefined) || {}).timing, ''),
      location: parseString(((doc?.details as AnyRecord | undefined) || {}).location, ''),
      address: parseString(((doc?.details as AnyRecord | undefined) || {}).address, ''),
      contact: parseString(((doc?.details as AnyRecord | undefined) || {}).contact, ''),
      features: Array.isArray(doc?.features)
        ? doc.features
          .map((item: AnyRecord) => parseString(item?.feature, ''))
          .filter(Boolean)
        : [],
      image: mediaUrl(doc?.image, '/ground-day.png'),
      mapEmbed: parseString(doc?.mapEmbed, ''),
    }))
  }, fallbackCamps)

// Helper to extract YouTube ID from various URL formats
const getYouTubeID = (url: string): string => {
  if (!url) return ''
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : ''
}

export const getGalleryData = async (): Promise<GalleryItem[]> =>
  withPayload(async (payload) => {
    const response = await payload.find({
      collection: 'gallery',
      depth: 2,
      limit: 200,
      sort: '-createdAt',
    })

    if (!Array.isArray(response?.docs) || response.docs.length === 0) return fallbackGallery

    return response.docs.map((doc: AnyRecord, index: number) => {
      const isCollection = Boolean(doc?.isCollection)
      if (isCollection && Array.isArray(doc?.items) && doc.items.length > 0) {
        const mappedItems: GalleryMediaItem[] = doc.items.map(
          (item: AnyRecord, itemIndex: number) => {
            const type = toMediaType(item?.type)
            const mediaSrc = mediaUrl(item?.media, '/academy-player.png')
            const rawYoutube = parseString(item?.youtubeUrl, '')
            const youtubeId = type === 'youtube' ? getYouTubeID(rawYoutube) : ''

            return {
              id: `${index + 1}-${itemIndex + 1}`,
              title: parseString(item?.title, `Item ${itemIndex + 1}`),
              description: parseString(item?.description, ''),
              // For YouTube we use the MaxRes poster. For local video/image we pass the URL.
              thumbnail: type === 'youtube' && youtubeId
                ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
                : mediaSrc,
              type,
              src: type === 'youtube' && youtubeId ? youtubeId : mediaSrc,
              category: parseString(doc?.category, 'general'),
            }
          },
        )

        const collectionItem: GalleryCollectionItem = {
          id: String(index + 1),
          title: parseString(doc?.title, `Gallery ${index + 1}`),
          description: parseString(doc?.description, ''),
          thumbnail: mappedItems[0]?.thumbnail || '/academy-player.png',
          category: parseString(doc?.category, 'general'),
          items: mappedItems,
          isCollection: true as const,
        }
        return collectionItem
      }

      const type = toMediaType(doc?.type)
      const mediaSrc = mediaUrl(doc?.image, '/academy-player.png')
      const rawYoutube = parseString(doc?.youtubeUrl, '')
      const youtubeId = type === 'youtube' ? getYouTubeID(rawYoutube) : ''

      const mediaItem: GalleryMediaItem = {
        id: String(index + 1),
        title: parseString(doc?.title, `Gallery ${index + 1}`),
        description: parseString(doc?.description, ''),
        thumbnail: type === 'youtube' && youtubeId
          ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
          : mediaSrc,
        type,
        src: type === 'youtube' && youtubeId ? youtubeId : mediaSrc,
        category: parseString(doc?.category, 'general'),
      }
      return mediaItem
    })
  }, fallbackGallery)

export const getMatchesData = async () =>
  withPayload(async (payload) => {
    const response = await payload.find({
      collection: 'matches',
      depth: 1,
      limit: 200,
      sort: '-date',
    })
    if (!Array.isArray(response?.docs) || response.docs.length === 0) return fallbackMatches

    return response.docs.map((doc: AnyRecord, index: number) => {
      const statusRaw = parseString(doc?.status, 'upcoming').toLowerCase()
      const status = matchStatusMap[statusRaw] || 'UPCOMING'
      const score = (doc?.score as AnyRecord | undefined) || {}
      const homeGoals = parseNumber(score.mcfc, 0)
      const awayGoals = parseNumber(score.opponent, 0)

      return {
        id: String(index + 1),
        competition: parseString(doc?.competition, 'MATCH DAY'),
        home: parseString(doc?.home, 'MCFC'),
        away: parseString(doc?.away, parseString(doc?.opponent, 'OPPONENT')),
        time: parseString(doc?.kickOffTime, parseTimeLabel(doc?.date)),
        date: parseDateLabel(doc?.date),
        venue: parseString(doc?.venue, 'TBD'),
        status,
        score: status === 'FINISHED' || status === 'LIVE' ? `${homeGoals} - ${awayGoals}` : '- VS -',
        videoUrl: youtubeToEmbed(doc?.highlightsUrl),
        homeScorers: Array.isArray(doc?.homeScorers)
          ? doc.homeScorers
            .map((item: AnyRecord) => parseString(item?.name, ''))
            .filter(Boolean)
          : [],
        awayScorers: Array.isArray(doc?.awayScorers)
          ? doc.awayScorers
            .map((item: AnyRecord) => parseString(item?.name, ''))
            .filter(Boolean)
          : [],
      }
    })
  }, fallbackMatches)

export const getJobsData = async () =>
  withPayload(async (payload) => {
    const response = await payload.find({
      collection: 'jobs',
      depth: 1,
      limit: 200,
      sort: '-createdAt',
      where: {
        isOpen: {
          equals: true,
        },
      },
    })
    if (!Array.isArray(response?.docs) || response.docs.length === 0) return fallbackJobs

    return response.docs.map((doc: AnyRecord, index: number) => ({
      id: String(index + 1),
      title: parseString(doc?.title, `Role ${index + 1}`),
      category: parseString(doc?.category, parseString(doc?.department, 'General')),
      type: jobTypeMap[parseString(doc?.type, 'full-time')] || 'Full-time',
      location: parseString(doc?.location, 'Kozhikode, Kerala'),
      salary: parseString(doc?.salary, 'Competitive'),
      description: parseString(doc?.description, ''),
      requirements: Array.isArray(doc?.requirements)
        ? doc.requirements
          .map((item: AnyRecord) => parseString(item?.item, ''))
          .filter(Boolean)
        : [],
      responsibilities: Array.isArray(doc?.responsibilities)
        ? doc.responsibilities
          .map((item: AnyRecord) => parseString(item?.item, ''))
          .filter(Boolean)
        : [],
      benefits: Array.isArray(doc?.benefits)
        ? doc.benefits
          .map((item: AnyRecord) => parseString(item?.item, ''))
          .filter(Boolean)
        : [],
    }))
  }, fallbackJobs)

export const getAnnouncementsData = async () =>
  withPayload(async (payload) => {
    const response = await payload.find({
      collection: 'announcements',
      depth: 2,
      limit: 100,
      sort: '-date',
    })
    if (!Array.isArray(response?.docs) || response.docs.length === 0) {
      return fallbackAnnouncements
    }

    const publishedDocs = response.docs.filter((doc: AnyRecord) => doc?.isPublished !== false)
    if (publishedDocs.length === 0) return fallbackAnnouncements

    return publishedDocs.map((doc: AnyRecord, index: number) => ({
      id: index + 1,
      category: parseString(doc?.category, 'Club Update'),
      tagColor: index % 2 === 0 ? 'bg-primary text-background' : 'bg-foreground text-background',
      title: parseString(doc?.title, 'Announcement'),
      date: parseDateLabel(doc?.date),
      readTime: parseString(doc?.readTime, '3 Min Read'),
      excerpt: parseString(doc?.excerpt, ''),
      content: parseString(richTextToPlain(doc?.content), parseString(doc?.excerpt, '')),
      image: mediaUrl(doc?.image, ''),
    }))
  }, fallbackAnnouncements)
