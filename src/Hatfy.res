type hats = [
  | #christmass
  | #alecell
]

@react.component
let make = (~hat: hats) => {
  <div>
    {switch hat {
      | #christmass => React.string("christmass")
      | #alecell => React.string("alecell")
    }}
  </div>
}
