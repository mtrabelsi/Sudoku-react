
class CellHelper {
  constructor(cell) {
    this.cell = cell
    this.showPopup = this.showPopup.bind(cell)
    this.clickPopup = this.clickPopup.bind(cell)
  }
  errorHighlight() {
    const game = this.cell.props.game
    const ret = !game.isMoveOk && game.conflictRow === this.cell.props.row && game.conflictColumn === this.cell.props.column
    return ret? 'buzz' : ''
  }
  isFetching() {
    const req = this.cell.props.game.fetch
    return req.isFetching && this.cell.props.row===req.fetchRow && this.cell.props.column===req.fetchCol? true : false
  }
  showPopup(e) {
    this.setState({ clicked : true })
  }
  clickPopup(e) {
    this.props.move(this.props.game.sudokuBoard, this.props.row, this.props.column, Number(e.target.innerText))
  }
}

export default CellHelper
