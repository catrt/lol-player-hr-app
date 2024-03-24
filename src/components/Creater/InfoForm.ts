import Component from "../../core/Component";
import { getFileUrl, uploadFile, deleteFile } from "../../core/firebase";
import { playerProps } from "../PlayerList/PlayerItem";
import {v4 as uuidv4} from 'uuid';

export default class InfoForm extends Component {
  constructor() {
    super({
      tagName: "form",
      classNames: ["player-form"]
    })
  }
  async update() {
    this.el.addEventListener("keydown", event => {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
    })

    const { key = "" } = history.state
    const playersJSON = localStorage.getItem("players")
    const infos = playersJSON && key && JSON.parse(playersJSON)[key]
    const url = infos && await getFileUrl(infos.image)

    this.el.innerHTML = /* html */`
      <button type="submit" class="btn">등록하기</button>
      <div class="player-form__image">
        ${infos ? `<img src="${url}">` : "<img>"}
        <input type="file" accept="image/*" name="image">
        <button type="button" class="btn">파일 선택</button>
      </div>
      <ul class="player-form__infos">
        <li>
          <h3>닉네임</h3>
          <input type="text" name="nickname" required value="${infos ? infos.nickname : ""}">
        </li>
        <li>
          <h3>선수 이름</h3>
          <input type="text" name="name" required value="${infos ? infos.name : ""}">
        </li>
        <li>
          <h3>소속 팀 이름</h3>
          <input type="text" name="team" required value="${infos ? infos.team : ""}">
        </li>
        <li>
          <h3>팀 내 소속</h3>
          <input type="text" name="level" required value="${infos ? infos.level : ""}">
        </li>
        <li>
          <h3>포지션</h3>
          <input type="text" name="position" required value="${infos ? infos.position : ""}">
        </li>
        <li>
          <h3>LOL Championship 우승 횟수</h3>
          <input type="number" name="championship" required value="${infos ? infos.champion.championship : ""}">
        </li>
        <li>
          <h3>MSI 우승 횟수</h3>
          <input type="number" name="msi" required value="${infos ? infos.champion.msi : ""}">
        </li>
        <li>
          <h3>리그 우승 횟수</h3>
          <input type="number" name="league" required value="${infos ? infos.champion.league : ""}">
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
      console.log(imageInputEl.files)
      console.log(imageInputEl.files?.length)
      if(imageInputEl.files && imageInputEl.files.length !== 0) {
        try {
          const fileUuid = uuidv4()
          const imageFile = imageInputEl.files[0]
          if(!infos) {
            await uploadFile(`${fileUuid}-${imageFile.name}`, imageFile)
          } else if(imageFile && `${fileUuid}-${imageFile.name}` !== infos.image) {
            await deleteFile(infos.image)
            await uploadFile(`${fileUuid}-${imageFile.name}`, imageFile)
          }
          
          const info: playerProps = {
            "nickname": nicknameInputEl.value.toUpperCase(),
            "image": imageFile ? `${fileUuid}-${imageFile.name}` : infos.image,
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
          
          if(playersJSON) {
            let players = JSON.parse(playersJSON)
            if(infos && info.nickname !== infos.nickname) delete players[infos.nickname]
            players[info.nickname] = info
            localStorage.setItem("players", JSON.stringify(players))
          } else {
            let players = {} as {[key: string]: playerProps}
            players[info.nickname] = info
            localStorage.setItem("players", JSON.stringify(players))
          }
          
          window.location.href = `#/profile?key=${info.nickname}`
        } catch (error) {
          console.error("Form Error!!")
          console.log(error)
        }
      }
    })
  }
}
