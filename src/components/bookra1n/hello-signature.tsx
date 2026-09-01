/**
 * BR Team handwritten "hello" — the ORIGINAL self-writing signature.
 * Same path + transforms as the classic animated hello.svg, but the
 * write-on effect now uses CSS stroke-dashoffset (works everywhere,
 * never freezes like SMIL did): writes itself → stays visible → fades → rewrites.
 */
export default function HelloSignature({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`hello-sign ${className}`}
      viewBox="0 0 350 197"
      role="img"
      aria-label="hello"
    >
      <g transform="matrix(1.181,0,0,1.195,-119.835,-198.027)">
        <g transform="matrix(1,0,0,1,252,245.918)">
          <path
            className="hello-stroke"
            pathLength={100}
            fill="none"
            stroke="#ffffff"
            strokeWidth={ 9 }
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M-145.66,43.747C-145.66,43.747,-86.107,10.264,-81.851,-26.162C-79.424,-46.943,-98.573,-44.137,-101.426,-23.013C-103.757,-5.755,-109.596,40.561,-109.596,40.561C-109.596,40.561,-103.979,-0.034,-85.851,1.753C-65.936,4.083,-91.979,40.05,-69,40.305C-48.573,40.532,-27.639,22.688,-26.873,10.943C-25.99,-2.599,-44.362,-4.886,-50.022,11.966C-55.226,27.461,-43.584,44.902,-23.54,40.581C7.341,33.922,22.483,-10.827,23.936,-26.077C25.467,-42.162,13.723,-43.694,6.574,-29.397C-0.104,-16.04,-11.245,37.085,12.958,41.583C41.809,46.944,64.277,-5.906,67.086,-23.779C69.802,-41.066,58.656,-45.952,50.234,-30.673C41.166,-14.223,27.843,44.077,59.937,41.326C86.746,39.028,76.916,2.264,102.898,-0.05C114.562,-1.088,119.386,9.92,118.532,21.029C117.638,32.646,106.66,42.475,95.809,40.943C85.898,39.544,80.838,25.973,83.425,17.072C86.617,6.094,96.662,0.12,102.898,-0.05C111.766,-0.29,116.234,5.327,124.149,5.199C131.179,5.086,138.27,-2.922,138.27,-2.922"
          />
        </g>
      </g>
    </svg>
  );
}
