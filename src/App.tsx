function App() {
  return (
    <div className="dark flex h-screen w-full flex-col items-center gap-4 bg-background text-foreground">
      <div className="flex items-center justify-center gap-4 p-4">
        <span className="font-bold text-red-400">
          ab<span className="font-bold text-neutral-200">enve</span>
        </span>

        <img
          className="inline-block h-8 w-8 border-spacing-8 rounded-full border border-border"
          src="./images/ab-square.png"
          alt="abenve"
        />
      </div>
      <div className="flex max-w-[30rem] flex-col items-center gap-2">
        <img
          src="./charts/arc_diagram.svg"
          alt="arc diagram"
          className="w-[30rem] rounded-md"
        />
        <div className="flex w-full flex-col gap-1">
          <span className="text-base text-foreground">
            Graph showing the relationship between the number of male and female
            students in each plan.
          </span>
          <small className="text-sm text-muted-foreground">
            19 / 8 - Create from{' '}
            <a
              target="_blank"
              className="text-green-400 hover:cursor-pointer hover:underline"
              href="https://app.rawgraphs.io/"
            >
              RawGraphs
            </a>
          </small>
        </div>
      </div>
    </div>
  )
}

export default App
