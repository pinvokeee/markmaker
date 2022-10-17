import MarkdownIt from "markdown-it"
import type { PluginSimple } from "markdown-it";
import Token from "markdown-it/lib/token";
import Renderer from "markdown-it/lib/renderer";
import { RuleInline } from "markdown-it/lib/parser_inline";

export const jumpHeaderPlugin: PluginSimple = (md) => 
{
  const defaultRender = 


  // md.renderer.rules.text || function(tokens, idx, options, env, self) {
  //   return self.renderToken(tokens, idx, options);
  // };
  
  md.renderer.rules.heading_open  = (
    tokens: Token[], 
    idx: number, 
    options: MarkdownIt.Options, 
    env: any, 
    self: Renderer) =>
  {
    const attr_id = tokens[idx].attrIndex("id");

    if (attr_id == -1)
    {
      tokens[idx].attrPush(["id", encodeURI(tokens[idx+1].content)]);
    }
    else
    {
      tokens[idx].attrSet("id", encodeURI(tokens[idx+1].content))
    }

    return self.renderToken(tokens, idx, options);
  }

  // md.renderer.rules.text = (
  //       tokens: Token[], 
  //       idx: number, 
  //       options: MarkdownIt.Options, 
  //       env: any, 
  //       self: Renderer) =>
  //   {
      
  //     console.log(tokens);
  //     // const s = self.renderToken(tokens, idx, options);
  //     return defaultRender(tokens, idx, options, env, self);
  //   }

};
