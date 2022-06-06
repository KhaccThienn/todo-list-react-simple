import React from "react";
import clsx from "clsx";
import { AiOutlineFileAdd } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { HiDocumentRemove } from "react-icons/hi";
import contentst from "./content.module.css";

class Contents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        index: 0,
        name: "",
        action: "Add Item", //default Add Item
        items: [],
        };
        this.changeName = this.changeName.bind(this);
    }

    changeName = (e) => {
        this.setState({
        name: e.target.value,
        });
    };

    addItem = () => {
        if (!this.state.items.find((item) => item.name === this.state.name)) {
        this.setState({
            items: [...this.state.items, { name: this.state.name }],
            name: "",
        });
        }
    };

    Edit = (item, index) => {
        this.setState({
        action: "Update Item",
        name: item.name,
        index: index,
        });
    };

    updateItem = () => {
        let data = this.state.items;
        // eslint-disable-next-line
        data.map((item, index) => {
        if (this.state.index === index) {
            item.name = this.state.name;
        }
        });

        this.setState({
        items: data,
        name: "",
        action: "Add Item",
        });
    };

    deleteItem = (name) => {
        this.setState({
        items: this.state.items.filter((item) => item.name !== name),
        name: "",
        action: "Add Item",
        });
    };

    render() {
        return (
        <div className={clsx(contentst.container)}>
            <p>
            {" "}
            Actions:{" "}
            <span className={clsx(contentst.title)}>{this.state.action}</span>
            </p>
            <div className={clsx(contentst.form)}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name=""
                onChange={this.changeName}
                value={this.state.name}
            />

            <AiOutlineFileAdd
                onClick={
                this.state.action === "Add Item" ? this.addItem : this.updateItem
                }
            />
            </div>
            <div className={clsx(contentst.todolist)}>
            <table cellSpacing={0} border="1">
                <thead>
                <tr>
                    <th>Status</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {this.state.items.map((item, index) => (
                    <tr key={index}>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>{item.name}</td>
                    <td className={clsx(contentst.actions)}>
                        <TbEdit onClick={() => this.Edit(item, index)} />
                        <HiDocumentRemove
                        onClick={() => this.deleteItem(item.name)}
                        />
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        );
    }
}

export default Contents;
