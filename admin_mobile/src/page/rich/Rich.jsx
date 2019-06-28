//引入react
import React, { Component } from 'react';
import {Button,Card,Modal} from 'antd'
import {Editor} from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftjs from 'draftjs-to-html';
import "./Rich.less";
//定义组件
export default class Rich extends Component {
    constructor(props){
        super(props)
        this.state = {
        showRichText:false,
        editorContent:"",
        editorState: '',
    }
    }
    handleClearContent (){
        this.setState({
            editorState:''
        })
    }
    onEditorChange(editorContent){
        this.setState({ editorContent })
    }
    onEditorStateChange(editorState){
        this.setState({
            editorState
        });
    }
    handleGetText(){
        console.log(this.state.showRichText)
        this.setState({showRichText:true})
        console.log(this.state.showRichText)
    }
    render() {
        const { editorState,showRichText} = this.state;
       return (
            <div>
             <Card style={{marginTop:10}}>
                    <Button type="primary" onClick={e=>this.handleClearContent()}>清空内容</Button>
                    <Button type="primary" onClick={e=>this.handleGetText()}>获取HTML文本</Button>
                </Card>
               <Card title="富文本编辑器">
                    <Editor
                        editorState={editorState}
                        onContentStateChange={editorContent=>this.onEditorChange(editorContent)}
                        onEditorStateChange={editorState=>this.onEditorStateChange(editorState)}
                    />
                </Card>
                <Modal
                    title="富文本"
                    visible={this.state.showRichText}
                    onCancel={()=>{
                        this.setState({
                            showRichText:false
                        })
                    }}
                    footer={null}
                >
                    {draftjs(this.state.editorContent)}
                </Modal>
            </div>
        );
    }
}
