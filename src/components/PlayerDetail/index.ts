import Component from "../../core/Component";
import { getFileUrl, deleteFile } from "../../core/firebase";

export default class PlayerDetail extends Component {
  constructor() {
    super({
      classNames: ["player-detail"]
    })
  }
  async update() {
    const playersJSON = localStorage.getItem("players")
    if(playersJSON){
      const players = JSON.parse(playersJSON)
      const playerInfos = players[history.state.key] 
                            ? players[history.state.key]
                            : players[Object.keys(players)[0]]
      const { nickname,
        image,
        name,
        team,
        level,
        position,
        champion
      } = playerInfos

      const url = await getFileUrl(image)

      this.el.innerHTML = /* html */`
        <button type="button" class="btn">
          <a href="#/edit?key=${nickname}">수정하기</a>
        </button>
        <button type="button" class="btn btn--delete">
          삭제하기
        </button>
        <img 
          src="${url}"
          alt="name" 
          class="player-detail__image">
        <div class="player-detail__infos">
          <h2>${nickname}</h2>
          <ul>
            <li>
              <h3>선수 이름</h3>
              <p>${name}</p>
            </li>
            <li>
              <h3>소속 팀 이름</h3>
              <p>${team}</p>
            </li>
            <li>
              <h3>팀 내 소속</h3>
              <p>${level}</p>
            </li>
            <li>
              <h3>포지션</h3>
              <p>${position}</p>
            </li>
            <li>
              <h3>LOL Championship 우승 횟수</h3>
              <p>${champion.championship}회</p>
            </li>
            <li>
              <h3>MSI 우승 횟수</h3>
              <p>${champion.msi}회</p>
            </li>
            <li>
              <h3>리그 우승 횟수</h3>
              <p>${champion.league}회</p>
            </li>
          </ul>
        </div>
      `

      const deleteBtnEl = this.el.querySelector(".btn--delete")
      deleteBtnEl?.addEventListener("click", async () => {
        await deleteFile(image)
        let players = JSON.parse(playersJSON)
        delete players[nickname]
        
        players.length === 0
          ? localStorage.removeItem("players")
          : localStorage.setItem("players", JSON.stringify(players))

        window.location.href = "#/management"
      })
    } else {
      const errorEl = document.createElement("div")
      errorEl.textContent = "There are no Registered Players."
      errorEl.classList.add("error")

      this.el.append(
        errorEl
      )
    }
  }
}
