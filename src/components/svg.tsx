interface SvgProps extends React.SVGProps<SVGSVGElement> {}

function Svg({ ...props }: SvgProps) {
  return <svg {...props}></svg>
}

export default Svg
