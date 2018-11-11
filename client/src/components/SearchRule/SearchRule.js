import React, { Component } from "react";
import PropTypes from "prop-types";
import Autocomplete from "react-autocomplete";
import Rule from "../Rule";
import Select from "react-select";
/**
 *
 * @param {*} state
 * @param {*} value
 */
function matchStateToTerm(state, value) {
  if (value === "") {
    return true;
  } else {
    return state.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
  }
}

/**
 *
 * @param {*} state
 * @param {*} value
 */
function isContainTag(state, value) {
  if (value === null) {
    return true;
  } else {
    var test = false;
    state.tags.forEach(tagData => {
      value.forEach(tagForm => {
        if (tagData === tagForm.value) {
          test = true;
        }
      });
    });
    return test;
  }
}

/**
 *
 * @param {*} rules
 */
function getTags(rules) {
  let tags = [];
  rules.forEach(rule => {
    rule.tags.forEach(tag => {
      let test = true;
      for(let i = 0; i < tags.length; i++){
        let item = tags[i].value;
        if(item === tag) {
          test = false;
        }
      }
      if (test) {
        tags.push({
          value: tag,
          label: tag
        });
      }
    });
  });
  return tags;
}
class SearchRule extends Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.reinitialiserClick = this.reinitialiserClick.bind(this);
  }

  /**
   * ETAT
   */
  state = {
    value: "",
    liste: this.props.rules,
    res: this.props.rules,
    tags: getTags(this.props.rules),
    selectedOption: null
  };

  requestTimer = null;

  /**
   * FONCTION DE RECHERCHE DE TRI
   */
  handleClick() {
    const { value, selectedOption } = this.state;

    if (value !== "" || selectedOption !== null) {
      let filter = this.props.rules.filter(state => {
        return (
          matchStateToTerm(state, value) && isContainTag(state, selectedOption)
        );
      });
      if (filter.length > 0) {
        this.setState({
          res: filter
        });
      } else {
        alert("Aucune recherche correspondante");
        this.setState({
          res: this.props.rules
        });
      }
    } else {
      alert("Aucune recherche correspondante");
      console.log("salut")
      this.setState({
        res: this.props.rules
      });
    }
  }

  /**
   * BOUTON QUI REINITIALISE LES CHAMPS DE RECHERCHE
   */
  reinitialiserClick() {
    this.setState({
      value: "",
      selectedOption: null
    });
    //appel d'une fonction d'un composant
    this.child.select.clearValue();
  }

  /**
   *
   * @param {*} value
   * @param {*} cb
   */
  fakeRequest(value, cb) {
    return setTimeout(
      cb,
      500,
      value
        ? this.state.liste.filter(state => matchStateToTerm(state, value)).slice(0, 4)
        : this.props.rules.slice(0, 5)
    );
  }
  /**
   * SELECTION DES CHAMPS DES TAGS
   */
  handleChange = selectedOption => {
    this.state.selectedOption = selectedOption;
  };

  render() {
    const { selectedTag, res, value, liste, tags } = this.state;
    const listItems = res.map(rule => <Rule key={rule.id} rule={rule} />);

    return (
      <div className="container">

        <div className="row">
          <h3>Search</h3>
          <div className="col-4">
            <h4>Titre</h4>
            <Autocomplete
              inputProps={{ id: "states-autocomplete" }}
              wrapperStyle={{ position: "relative", display: "inline-block" }}
              value={value}
              items={liste}
              getItemValue={item => item.title}
              onSelect={(value, item) => {
                this.setState({ value, liste: [item] });
              }}
              onChange={(event, value) => {
                this.setState({ value });
                clearTimeout(this.requestTimer);
                this.requestTimer = this.fakeRequest(value, items => {
                  this.setState({ liste: items });
                });
              }}
              renderMenu={
                children => 
                <div className="menu">
                  {children}
                </div>
              }
              renderItem={(item, isHighlighted) => (
                <div
                  style={{ background: isHighlighted ? "lightgray" : "white" }}
                >
                  {item.title}
                </div>
              )}
              renderInput={props => (
                <input {...props} className="form-control" />
              )}
            />
          </div>
          <div className="col-4">
            <h4>Selection de tags</h4>
            <Select
              ref={instance => {
                this.child = instance;
              }}
              isMulti={true}
              isSearchable={true}
              options={tags}
              value={selectedTag}
              onChange={this.handleChange}
            />
          </div>
        </div>
          <div className="row">
          <div className="col-4">
              <br />
              <button
                className="btn btn-primary pull-right"
                onClick={this.handleClick}
              >
                Rechercher
              </button>
            </div>
          <div className="col-4">
            <button
              className="btn btn-primary pull-right"
              onClick={this.reinitialiserClick}
            >
              Réinitialiser les champs
            </button>
          </div> 
        </div>
        <br />
        <br />

        {listItems}
      </div>
    );
  }

  static propTypes = {
    rules: PropTypes.arrayOf(PropTypes.object).isRequired
  };
}

export default SearchRule;
