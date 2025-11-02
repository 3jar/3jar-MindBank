// // AccentText.tsx
// import React, { ReactNode, isValidElement } from "react";

// accentClassName = "font-accent font-bold text-accent",

// export const Accent: React.FC<{ children: ReactNode }> = ({ children }) => (
//     <>{children}</>
// );
// // 표시용 이름(디버깅 편의)
// Accent.displayName = "Accent";

// interface AccentTextProps extends React.ComponentProps<"p"> {
//     children: ReactNode;
// };

// export function AccentText({ children, className, ...props }: AccentTextProps) {
//     const renderNode = (node: ReactNode): ReactNode => {
//         if (node == null) return null;
//         if (typeof node === "string" || typeof node === "number") return node;
//         if (Array.isArray(node))
//             return node.map((n, i) => (
//                 <React.Fragment key={i}>{renderNode(n)}</React.Fragment>
//             ));

//         if (isValidElement(node)) {
//             // <Accent>…</Accent> 마커를 만나면 강조 span으로 감싸기
//             if (node.type === Accent) {
//                 return (
//                     <span accentClassName>
//                         {renderNode(node.props.children)}
//                     </span>
//                 );
//             }
//             // 다른 요소는 그대로 두되, 하위에 Accent가 또 있을 수 있으니 재귀적으로 처리
//             return React.cloneElement(node, {
//                 ...node.props,
//                 children: renderNode(node.props.children),
//             });
//         }
//         return node;
//     };

//     return <p
//         className
//         props
//     >{renderNode(children)}</p>;
// }
