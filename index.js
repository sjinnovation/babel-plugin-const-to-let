module.exports = function ({ types: t }) {
  return {
    visitor: {
      VariableDeclaration(path) {
        if (path.node.kind === 'const') {
          path.replaceWith(
            t.variableDeclaration('let', path.node.declarations)
          );
        }
      }
    }
  }
};
