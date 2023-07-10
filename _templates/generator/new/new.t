---
to: src/components/<%= atomic %>/<%= name %>/<%= name %>.tsx
---
import { Div } from './<%= name %>.style'
<% if (have_props) { -%>
export type <%= name %>Props = {};
<% } -%>

export const <%= name %>=(<% if (have_props) { -%>
{}: <%= name %>Props
<% } -%>)=>{
    return <Div><p>this is react template</p></Div>
}