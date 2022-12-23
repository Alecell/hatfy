@module("./alecell.svg")
external alecell: string = "default"

@module("./christmas.svg")
external christmas: string = "default"

%%raw("import './styles.css'")

type hats = [
  | #christmas
  | #alecell
]

@react.component
let make = (~hat: hats, ~children: React.element) => {
  <div className="container">
    {switch hat {
      | #christmas => <img className="image" src=christmas />
      | #alecell => <img className="image" src=alecell />
    }}

    children
  </div>
}
