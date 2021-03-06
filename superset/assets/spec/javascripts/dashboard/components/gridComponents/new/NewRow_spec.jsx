import React from 'react';
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';
import { expect } from 'chai';

import DraggableNewComponent from '../../../../../../src/dashboard/components/gridComponents/new/DraggableNewComponent';
import NewRow from '../../../../../../src/dashboard/components/gridComponents/new/NewRow';

import { NEW_ROW_ID } from '../../../../../../src/dashboard/util/constants';
import { ROW_TYPE } from '../../../../../../src/dashboard/util/componentTypes';

describe('NewRow', () => {
  function setup() {
    return shallow(<NewRow />);
  }

  it('should render a DraggableNewComponent', () => {
    const wrapper = setup();
    expect(wrapper.find(DraggableNewComponent)).to.have.length(1);
  });

  it('should set appropriate type and id', () => {
    const wrapper = setup();
    expect(wrapper.find(DraggableNewComponent).props()).to.include({
      type: ROW_TYPE,
      id: NEW_ROW_ID,
    });
  });
});
