import { $ } from "../lib/util.js";
import { PRIORITY } from "../constants/constant.js";

// models
import MemberModel from "./model/MemberModel.js";
import TodoItemModel from "./model/TodoItemModel.js";

// components
import TeamTitle from "./TeamTitle.js";
import MemberList from "./MemberList.js";
import TodoInput from "./TodoInput.js";
import TodoDeleteAll from "./TodoDeleteAll.js";
import TodoFilter from "./TodoFilter.js";
import TodoListItem from "./TodoListItem.js";

// events
import { onAddMember } from "./event/Team.js";
import { onAddItem } from "./event/TodoInput.js";
import { onDeleteAllItem } from "./event/TodoDeleteAll.js";
import {
  onDeleteItem,
  onCompleteItem,
  onEditingItem,
  onEditItem,
  onSetPriority,
} from "./event/TodoList.js";
import { filtering } from "./event/TodoFilter.js";

class Team {
  constructor({ teamData }) {
    this.teamData = teamData;
    this.memberListData = this.teamData.members.map((member) => {
      return new MemberModel({
        ...member,
        id: member._id,
        todoList: member.todoList.map((item) => {
          return new TodoItemModel({ ...item, id: item._id, priority: PRIORITY[item.priority] });
        }),
      });
    });
    new TeamTitle({ titleName: this.teamData.name });
    this.memberList = new MemberList({ memberList: this.memberListData });
    this.onAddMember = onAddMember;
    this.init();
  }

  init() {
    this.render(this.memberListData);
  }

  render(memberListData) {
    this.memberList.render(memberListData);
    this.registerEventListener();
    this.addComponentEvent();
  }

  registerEventListener() {
    $("#add-user-button").addEventListener("click", this.onAddMember.bind(this));
  }

  addComponentEvent() {
    new TodoInput({ onAddItem: onAddItem.bind(this) });
    new TodoDeleteAll({ onDeleteAll: onDeleteAllItem.bind(this) });
    new TodoFilter({ filtering: filtering.bind(this) });
    new TodoListItem({
      onDeleteItem: onDeleteItem.bind(this),
      onCompleteItem: onCompleteItem.bind(this),
      onEditingItem: onEditingItem.bind(this),
      onEditItem: onEditItem.bind(this),
      onSetPriority: onSetPriority.bind(this),
    });
  }
}

export default Team;
