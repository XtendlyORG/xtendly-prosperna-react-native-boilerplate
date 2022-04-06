import { FlexStyle, StyleSheet } from 'react-native'

// Flex styles
export const flexContainer: FlexStyle = {
  flex: 1,
}

export const flexGrow: FlexStyle = {
  flexGrow: 1,
}

export const flexSpaceBetween: FlexStyle = {
  justifyContent: 'space-between',
}

export const flexSpaceAround: FlexStyle = {
  justifyContent: 'space-around',
}

export const flexSpaceEvenly: FlexStyle = {
  justifyContent: 'space-evenly',
}

export const justifyContentFlexStart: FlexStyle = {
  justifyContent: 'flex-start',
}

export const justifyContentCenter: FlexStyle = {
  justifyContent: 'center',
}

export const justifyContentFlexEnd: FlexStyle = {
  justifyContent: 'flex-end',
}

export const alignItemsCenter: FlexStyle = {
  alignItems: 'center',
}

export const alignItemsFlexEnd: FlexStyle = {
  alignItems: 'flex-end',
}

export const alignSelfCenter: FlexStyle = {
  alignSelf: 'center',
}

export const flexDirectionRow: FlexStyle = {
  flexDirection: 'row',
}

export const flexContainerRow: FlexStyle = {
  // ...flexContainer,
  ...flexDirectionRow,
}

export const flexVerticalCenter: FlexStyle = {
  ...flexContainer,
  ...justifyContentCenter,
}

export const flexHorizontalCenter: FlexStyle = {
  ...flexContainer,
  ...alignItemsCenter,
}

export const flexCenter: FlexStyle = {
  ...flexVerticalCenter,
  ...flexHorizontalCenter,
}

export const FlexStyles = StyleSheet.create({
  alignItemsCenter,
  alignItemsFlexEnd,
  alignSelfCenter,
  flexCenter,
  flexContainer,
  flexContainerRow,
  flexDirectionRow,
  flexGrow,
  flexHorizontalCenter,
  flexSpaceAround,
  flexSpaceBetween,
  flexSpaceEvenly,
  flexVerticalCenter,
  justifyContentCenter,
  justifyContentFlexEnd,
  justifyContentFlexStart,
})
// Flex styles end
