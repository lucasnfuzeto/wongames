import Game, { GameTemplateProps } from 'templates/Game'
import mockGallery from 'components/Gallery/mock'
import mockGameDetails from 'components/GameDetails/mock'
import mockGames from 'components/GameCardSlider/mock'
import mockHighlight from 'components/Highlight/mock'

export default function SignIn(props: GameTemplateProps) {
  return <Game {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'little-nightmares' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  const descriptionHTML = `<div class="description"><div style="overflow: hidden;"><a href="https://www.gog.com/game/little_nightmares_ii_demo"><img src="https://items.gog.com/little_nightmares_ii/main_main_little_nightmares_ii_demo.png" style="margin: 5px 15px 0 10px; float: left; width: 250px"></a><span style="display: block;"><br><br>Little Nightmares II DEMO is available <a href="https://www.gog.com/game/little_nightmares_ii_demo"><b>here</b></a></span></div><hr><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/little_nightmares_ii/mp4/Little-Nightmares-II_GamescomTrailer_01.gif.mp4"></video><br>

      Return to a world of charming horror in Little Nightmares II, a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by the humming transmission of a distant tower.
      <br><br>
      With Six, the girl in the yellow raincoat, as his guide, Mono sets out to discover the dark secrets of The Signal Tower. Their journey won't be easy; Mono and Six will face a host of new threats from the terrible residents of this world.
      <br><br>
      Will you dare to face this collection of new, little nightmares?
      <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/little_nightmares_ii/mp4/Little-Nightmares-II_GamescomTrailer_02.gif.mp4"></video><p class="description__copyrights">
            Little Nightmares ® II &amp; © 2021 BANDAI NAMCO Entertainment Europe. All rights reserved.
        </p></div>`

  return {
    props: {
      cover:
        'https://images.gog-statics.com/871c64d6b7c53131354e34bbebb5dca55ace2919abe04e984847a5be97b67042.jpg',
      gameInfo: {
        title: 'Little Nightmares II',
        price: '159.49',
        description:
          'Little Nightmares II is a suspense-adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by the humming transmission of a distant tower.'
      },
      gallery: mockGallery,
      description: descriptionHTML,
      details: mockGameDetails,
      upcomingGames: mockGames,
      upcomingHighlight: mockHighlight,
      recommendedGames: mockGames
    }
  }
}
