export interface Screen {
  name: string
  params: {}
}

export interface NavigationState {
  currentScreen: string
  currentStack: string
  currentParams: {}
  previousScreens: Screen[]
}

export interface ResetStack {
  screenName: string
  stackName: string
  params?: {}
}

export interface Navigate {
  screenName: string
  params?: {}
}
