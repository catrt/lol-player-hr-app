import Component from "../../core/Component";
import { getPlayerImageUrl, uploadPlayerImage } from "../../core/supabase";
import { playerProps } from "../PlayerList/PlayerItem";

export default class InfoForm extends Component {
  constructor() {
    super({
      tagName: "form",
      classNames: ["player-form"]
    })
  }
  update() {
    const { key = "" } = history.state
    const players = localStorage.getItem("players")
    const infos = players && key && JSON.parse(players)[key]

    this.el.innerHTML = /* html */`
      <button type="submit" class="btn">등록하기</button>
      <div class="player-form__image">
        ${infos ? `<img src="${getPlayerImageUrl(infos.image)}">` : "<img>"}
        <input type="file" accept="image/*" name="image">
        <button type="button" class="btn">파일 선택</button>
      </div>
      <ul class="player-form__infos">
        <li>
          <h3>닉네임</h3>
          <input type="text" name="nickname" value="${infos ? infos.nickname : ""}">
        </li>
        <li>
          <h3>선수 이름</h3>
          <input type="text" name="name" value="${infos ? infos.name : ""}">
        </li>
        <li>
          <h3>소속 팀 이름</h3>
          <input type="text" name="team" value="${infos ? infos.team : ""}">
        </li>
        <li>
          <h3>팀 내 소속</h3>
          <input type="text" name="level" value="${infos ? infos.level : ""}">
        </li>
        <li>
          <h3>포지션</h3>
          <input type="text" name="position" value="${infos ? infos.position : ""}">
        </li>
        <li>
          <h3>LOL Championship 우승 횟수</h3>
          <input type="number" name="championship" value="${infos ? infos.champion.championship : ""}">
        </li>
        <li>
          <h3>MSI 우승 횟수</h3>
          <input type="number" name="msi" value="${infos ? infos.champion.msi : ""}">
        </li>
        <li>
          <h3>리그 우승 횟수</h3>
          <input type="number" name="league" value="${infos ? infos.champion.league : ""}">
        </li>
      </ul>
    `

    const playerImageEl = this.el.querySelector(".player-form__image img") 
    const fileInputEl = this.el.querySelector(".player-form__image input") as HTMLInputElement
    const fileBtnEl = this.el.querySelector(".player-form__image button")
    fileBtnEl?.addEventListener("click", () => fileInputEl.click())
    fileInputEl.addEventListener("change", () => {
      if(fileInputEl.files?.length) {
        const file = fileInputEl.files[0]
        const fileReader = new FileReader()

        fileReader.onload = e => {
          if(e.target) {
            playerImageEl?.setAttribute("src", e.target.result as string)
          }
        }
        fileReader.readAsDataURL(file)
      }
    })

    this.el.addEventListener("submit", async event => {
      event.preventDefault()
      const form = event.target as HTMLFormElement
      const imageInputEl = form.elements.namedItem("image") as HTMLInputElement
      const nicknameInputEl = form.elements.namedItem("nickname") as HTMLInputElement
      const nameInputEl = form.elements.namedItem("name") as HTMLInputElement
      const teamInputEl = form.elements.namedItem("team") as HTMLInputElement
      const levelInputEl = form.elements.namedItem("level") as HTMLInputElement
      const positionInputEl = form.elements.namedItem("position") as HTMLInputElement
      const championshipInputEl = form.elements.namedItem("championship") as HTMLInputElement
      const msiInputEl = form.elements.namedItem("msi") as HTMLInputElement
      const leagueInputEl = form.elements.namedItem("league") as HTMLInputElement

      if(imageInputEl.files) {
        try {
          const imageFile = imageInputEl.files[0]
          await uploadPlayerImage(imageFile.name, imageFile)
  
          const info: playerProps = {
            "nickname": nicknameInputEl.value,
            "image": imageFile.name,
            "name": nameInputEl.value,
            "team": teamInputEl.value,
            "level": levelInputEl.value,
            "position": positionInputEl.value,
            "champion": {
              "championship": Number(championshipInputEl.value),
              "msi": Number(msiInputEl.value),
              "league": Number(leagueInputEl.value),
            }
          }
    
          localStorage.setItem("players", JSON.stringify((players ? JSON.parse(players) : {}).defineProperty(nicknameInputEl.value, info)))

          window.history.back()
        } catch (error) {
          console.error("Form Error!!")
          console.log(error)
        }
      }
    })
  }
}