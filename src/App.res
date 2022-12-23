@react.component
let make = () => {
  <div>
    <Hatfy hat=#christmas>
      <div style={ReactDOM.Style.make(~height="200px", ~width="400px", ~backgroundColor="blue", ())} />
    </Hatfy>
  </div>
}
