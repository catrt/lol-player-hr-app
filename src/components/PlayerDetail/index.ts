import Component from "../../core/Component";
import { getPlayerImageUrl } from "../../core/supabase";

export default class PlayerDetail extends Component {
  constructor() {
    super({
      classNames: ["player-detail"]
    })
  }
  update() {
    const playersData = localStorage.getItem("players")
    if(playersData){
      const playerInfos = JSON.parse(playersData)[history.state.key]
      const { nickname,
        image,
        name,
        team,
        level,
        position,
        champion
      } = playerInfos

      this.el.innerHTML = /* html */`
        <button type="button" class="btn">
          <a href="#/edit?key=${nickname}">수정하기</a>
        </button>
        <button type="button" class="btn btn--delete">
          삭제하기
        </button>
        <img 
          src="${getPlayerImageUrl(image)}" 
          alt="name" 
          class="player-detail__image">
        <div class="player-detail__infos">
          <h2>${nickname.toUpperCase()}</h2>
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
    }
  }
}
