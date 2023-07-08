---
to: src/components/<%= atomic %>/<%= name %>/<%= name %>.tsx
---
<% if (have_props) { -%>
export type <%= name %>Props = {};
<% } -%>

export const <%= name %>=(<% if (have_props) { -%>
{}: <%= name %>Props
<% } -%>)=>{
    return <div>this is react template</div>
}