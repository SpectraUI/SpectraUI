export interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
}

export const Divider: React.FC<DividerProps> = ({ orientation }) => {
  if (orientation) {
    orientation = orientation
  } else {
    orientation = 'horizontal'
  }

  return (<div className={`shrink-0 border-gray-600 ${orientation === 'horizontal' ? 'w-full border-t-[1px]' : 'h-[70%] border-r-[1px]'} h-divider my-4`} role="separator" aria-orientation={orientation} />)
}
