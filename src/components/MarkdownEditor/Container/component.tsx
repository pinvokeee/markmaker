import styled from "@emotion/styled";
import Context from "@mui/base/TabsUnstyled/TabsContext";
import { useCallback, useState } from "react";
import Split from "react-split";
import { IEditContext } from "../../../hooks/useEditContext";
import { ReactMonacoEditor } from "../../ReactMonacoEditor/component";
import { MarkdownView } from "../MarkdownViewer/component";
import * as React from 'react';
import * as materialIcons from '@mui/icons-material';

import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';


export interface IMarkdownEditorContainerProps
{
    context: IEditContext,
}

export const MarkDownEditorContainer = (props : IMarkdownEditorContainerProps) =>
{
    const onChange = (value : string, event : any) =>
    {
        props.context.onTextChange(value);
    }

    const onUpdateSource = (src : string) =>
    {
        props.context.setHtmlSource(src);
    }

    return (<>
            <FullContainer>
                <Split  cursor="col-resize" style={{ height: "100%", display: "flex" }} sizes={[20, 30, 50]}             
                gutterSize={3}
                gutter={() => 
                { 
                    const g = document.createElement("div");
                    g.className = "gutter_style";
                    return g;
                }} 
                gutterStyle={() => ({})}>
                    <div>
                    <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<materialIcons.ExpandMore />}
                        defaultExpandIcon={<materialIcons.ChevronRight />}
                        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                        >
                        <TreeItem nodeId="1" label="Applications">
                            <TreeItem nodeId="2" label="Calendar" />
                        </TreeItem>
                        <TreeItem nodeId="5" label="Documents">
                            <TreeItem nodeId="10" label="OSS" />
                            <TreeItem nodeId="6" label="MUI">
                            <TreeItem nodeId="8" label="index.js" />
                            </TreeItem>
                        </TreeItem>
                        </TreeView>
                    </div>
                    <div>
                        <ReactMonacoEditor text={props.context.text} onChange={onChange}></ReactMonacoEditor>
                    </div>
                    <FullContainer>
                        <MarkdownView source={props.context.text} onUpdateSource={onUpdateSource}></MarkdownView>
                    </FullContainer>
                    
                </Split>

        </FullContainer>
    </>);
}

const FullContainer = styled.div`
    width: 100%;
    height: 100%;
`

const HContainer = styled.div`
    height: 100%;
`