import React from 'react';
import ReactShallowRender, { createRenderer } from "react-test-renderer/shallow";
import Header from "../../components/Header";

test("should render header correctly", () => {
    const renderer = new ReactShallowRender();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});