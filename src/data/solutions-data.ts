import TrustIcon from '@/assets/trust-icon.png'
import HandIcon from '@/assets/hand.png'
import CirclesIcon from '@/assets/circles.png'

import { StaticImageData } from 'next/image'

export type SolutionsType = {
  icon: StaticImageData
  title: string
  body: string
}

export const SolutionsData: SolutionsType[] = [
  {
    icon: TrustIcon,
    title: 'Parceria Que Gera Confiança',
    body: 'Mais do que um seguro, somos um parceiro estratégico para a sua instituição. Com nossa proteção, você reforça seu compromisso com a segurança e o bem-estar dos alunos, elevando a confiança dos pais e se destacando no mercado.',
  },
  {
    icon: HandIcon,
    title: 'Um Gesto de Cuidado e Valor',
    body: 'Proteger seus alunos com um seguro de vida é uma demonstração de cuidado que transcende o ensino. Esse diferencial fortalece a reputação da sua instituição e mostra que você investe no que há de mais importante: a vida e o bem-estar de seus estudantes.',
  },
  {
    icon: CirclesIcon,
    title: 'Tranquilidade para Focar no que Importa',
    body: 'Sabemos que a vida acadêmica exige dedicação, e a preocupação com imprevistos não pode ser um obstáculo. Nosso objetivo é dar tranquilidade aos alunos e seus pais, garantindo que o foco total esteja no aprendizado e no crescimento pessoal.',
  },
]

export default SolutionsData
