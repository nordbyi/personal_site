type conditionalText = {
  win?: string[],
  loss?: string[],
  repeatText?: string[],
  repeatWin?: string[],
  repeatLoss?: string[],
  hidden?: string[]
}

type step = {
  text: string[], 
  conditionalText?: conditionalText,
  emote: string[],
  game: boolean,
  gameText?: string,
  mountAnimation: boolean,
  unmountDelay: number,
  lockProgress: boolean,
  project: string,
}
// maybe refactor emote and possibly text above to be an object with properties of different emotions that the game can select from depending on win, loss, repeating, secret"
// Perhaps refactor text oriented properties to be arrays of strings that contain all the text I want to display
//      and traverse over that array and when the end is hit, then move to next data model step?

const testData: step[] = [
  {text: ['Testing 123', 'This should show up before moving on to typing game'],
    emote: ['https://user-images.githubusercontent.com/108428451/227247013-357061a7-8b34-4cb3-a2e6-f2eaed388a52.gif'],
    game: false,
    mountAnimation: false,
    unmountDelay: 0,
    lockProgress: false,
    project: ''},
  {text: ['This should show the typing game'],
    emote: ["https://user-images.githubusercontent.com/108428451/227252664-e3826440-001c-4081-89f1-8920b05adb53.gif"],
    game: true,
    gameText: 'Test',
    mountAnimation: true,
    unmountDelay: 500,
    lockProgress: true,
    project: ''},
  {text: ['Should not see this'],
    conditionalText: {
      win: ['Nice job! You crushed it!'],
      loss: ['Close one! Better luck next time!']
    },
    emote: ["https://user-images.githubusercontent.com/108428451/227247885-4f261c10-f361-47fc-8bb6-eef0b2e4161d.gif"],
    game: false,
    mountAnimation: false,
    unmountDelay: 0,
    lockProgress: false,
    project: ''},
  {text: ["This will show one of the projects I've created once I get the functionality and component all set up!"],
    emote: ["https://user-images.githubusercontent.com/108428451/227247885-4f261c10-f361-47fc-8bb6-eef0b2e4161d.gif"],
    game: false,
    mountAnimation: true,
    unmountDelay: 500,
    lockProgress: false,
    project: 'doomscroll'},
  {text: ['Let\'s talk about another of my projects! How exciting!'],
    emote: ["https://user-images.githubusercontent.com/108428451/227247885-4f261c10-f361-47fc-8bb6-eef0b2e4161d.gif"],
    game: false,
    mountAnimation: false,
    unmountDelay: 0,
    lockProgress: false,
    project: ''},
  {text: ["This will show one of the projects I've created once I get the functionality and component all set up!"],
    emote: ["https://user-images.githubusercontent.com/108428451/227247885-4f261c10-f361-47fc-8bb6-eef0b2e4161d.gif"],
    game: false,
    mountAnimation: true,
    unmountDelay: 500,
    lockProgress: false,
    project: 'personal'}
]

export default testData