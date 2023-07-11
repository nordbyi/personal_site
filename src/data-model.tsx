type step = {
  text: string[], // default text, game win text, game loss text
  emote: string,
  game: boolean,
  gameText?: string,
  mountAnimation: boolean,
  unmountDelay: number,
  lockProgress: boolean,
}

const testData: step[] = [
  {text: ['Testing 123'],
    emote: 'https://user-images.githubusercontent.com/108428451/227247013-357061a7-8b34-4cb3-a2e6-f2eaed388a52.gif',
    game: false,
    mountAnimation: false,
    unmountDelay: 0,
    lockProgress: false},
  {text: ['This should show the typing game'],
    emote: "https://user-images.githubusercontent.com/108428451/227252664-e3826440-001c-4081-89f1-8920b05adb53.gif",
    game: true,
    gameText: 'Test',
    mountAnimation: true,
    unmountDelay: 500,
    lockProgress: true},
  {text: ['', 'Nice job! You crushed it!', 'Close one! Better luck next time!'],
    emote: "https://user-images.githubusercontent.com/108428451/227247885-4f261c10-f361-47fc-8bb6-eef0b2e4161d.gif",
    game: false,
    mountAnimation: false,
    unmountDelay: 0,
    lockProgress: false}
]

export default testData