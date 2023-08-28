function Spinner({
  size = 200,
  message = '로딩 중...',
  colors = ['#93dbe9', '#689cc5', '#5e6fa3'],
  ...restProps
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style={{ margin: 'auto', background: '#fff', display: 'block' }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <radialGradient
          id="ldio-og0bfn444s-gradient"
          cx="0.5"
          cy="0.5"
          fx="0"
          fy="0"
          r="2"
        >
          <stop offset="0%" stopColor="#ffffcb"></stop>
          <stop offset="100%" stopColor="#ff7c81"></stop>
        </radialGradient>
      </defs>
      <g>
        <circle
          cx="50"
          cy="50"
          r="30"
          stroke="#ffffdc"
          strokeWidth="12"
          fill="none"
          strokeOpacity="0.7"
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="30"
          stroke="url(#ldio-og0bfn444s-gradient)"
          strokeWidth="10"
          fill="none"
        ></circle>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 50 50;360 50 50"
          times="0;1"
          dur="1s"
          repeatCount="indefinite"
        ></animateTransform>
      </g>
    </svg>
  );
}

export default Spinner;
