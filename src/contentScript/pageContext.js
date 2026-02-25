function addLatexToMathJax3()
{
    if (!MathJax?.startup?.document?.math)
        return

    for (const math of MathJax.startup.document.math)
    {
        math.typesetRoot.setAttribute("markdownload-latex", math.math)
    }
}
addLatexToMathJax3()
