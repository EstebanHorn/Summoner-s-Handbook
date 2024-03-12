import styles from './champion.module.css'
import Spells from './spells'
import InfoChamp from './tips'
import BannerChamp from './banner'
import Skins from './skins'

const fetchChamp = async (name) => {
  return fetch(
    ` http://ddragon.leagueoflegends.com/cdn/13.13.1/data/es_ES/champion/${name}.json`
  ).then((res) => res.json())
}

export default async function Champion ({ params }) {
  const { name } = params
  const fetch = await fetchChamp(name)
  console.log(name)
  const champion = fetch.data
  const championName = Object.keys(champion)[0]
  const championLore = champion[championName].lore
  const championSpells = champion[championName].spells
  const championPassive = champion[championName].passive
  const championTitle = champion[championName].title
  const championTags = champion[championName].tags
  const championAllyTips = champion[championName].allytips
  const championEmenyTips = champion[championName].enemytips
  const championSkins = champion[championName].skins

  return (
    <div className={styles.container}>
      <BannerChamp
        Title={championTitle}
        Name={championName}
        Tags={championTags}
      />
      <div className='flex md:flex-row flex-col gap-12 w-full md:px-10 px-2'>
        <Spells
          passive={championPassive.name}
          descriptionPassive={championPassive.description}
          ImgPassive={championPassive.image.full}
          spellQ={championSpells[0].name}
          spellW={championSpells[1].name}
          spellE={championSpells[2].name}
          spellR={championSpells[3].name}
          descriptionQ={championSpells[0].description}
          descriptionW={championSpells[1].description}
          descriptionE={championSpells[2].description}
          descriptionR={championSpells[3].description}
          ImgQ={championSpells[0].id}
          ImgW={championSpells[1].id}
          ImgE={championSpells[2].id}
          ImgR={championSpells[3].id}
          keyChamp={champion[championName].key}
        />
        <InfoChamp
          AllyTips={championAllyTips}
          EmenyTips={championEmenyTips}
          Lore={championLore}
        />
      </div>
      <Skins skins={championSkins} champName={championName} />
    </div>
  )
}
