import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders without results", () => {
  shallow(<Search searchResults={[]} />);
});

it("renders suggestions", () => {
  const wrapper = shallow(
    <Search
      searchResults={[
        { name: "Manchester", index: 1 },
        { name: "London", index: 2 },
        { name: "Norwich", index: 3 }
      ]}
    />
  );
  expect(wrapper.find("li").length).toEqual(3);
});

it("renders no more than 6 suggestions", () => {
  const wrapper = shallow(
    <Search
      searchResults={[
        { name: "Manchester", index: 1 },
        { name: "London", index: 2 },
        { name: "Norwich", index: 3 },
        { name: "York", index: 4 },
        { name: "Bristol", index: 5 },
        { name: "Exeter", index: 6 }
      ]}
    />
  );
  expect(wrapper.find("li").length).toEqual(6);
});
