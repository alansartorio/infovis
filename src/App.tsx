function App() {
  return (
    <div className="dark flex h-screen w-full flex-col items-center gap-4 bg-background text-foreground">
      <div className="flex items-center justify-center gap-4 p-4">
        <img
          className="inline-block bg-white h-8 w-8 border-spacing-8 rounded-full border border-border"
          src="./images/alan-square.svg"
          alt="alan"
        />

        <span className="font-bold text-red-400">
          <span className="font-bold text-neutral-200">ALAN</span>
        </span>
      </div>
      <div className="flex max-w-[30rem] flex-col items-center gap-2">
        <img
          src="./charts/filesystem.svg"
          alt="filesystem diagram"
          className="w-[30rem] rounded-md"
        />
        <div className="flex w-full flex-col gap-1">
          <span className="text-base text-foreground">
            Sunburst plot showing filesystem tree after Home directory
          </span>
          <small className="text-sm text-muted-foreground">
            26 / 8 - Create from{' '}
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
