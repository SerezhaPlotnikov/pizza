import React from "react";
import { connect } from "react-redux";

export const Main = () => {
  return <div>Main</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
