d3.json("game.json", (data) => {
    const { players, name } = data
    // TODO
    // 18 + 17 => 100%
    // x: 805 * players[0].possession / 100 - 128 / 2
    svg.append('svg:image')
        .attr({
            'xlink:href': '../lib/soccer_ball.png',
            // total width
            x: 805 * players[0].possession / 100 - 128 / 2,
            y: 200,
            width: 128,
            height: 128
        })

    svg.append("text")
        .attr("x", (width / 2))
        .attr("y", 50)
        .attr("text-anchor", "middle")
        .style("stroke", "gray")
        .style("fill", "white")
        .style("font-size", "48px")
        .style("font-weight", "bold")
        .text('Head possession')

    svg.append("text")
        .attr("x", (width / 4))
        .attr("y", 110)
        .attr("text-anchor", "middle")
        .style("stroke", "gray")
        .style("fill", "white")
        .style("font-size", "48px")
        .style("font-weight", "bold")
        .text(players[0].name)

    svg.append("text")
        .attr("x", (width / 5))
        .attr("y", height / 2 + 30)
        .attr("text-anchor", "middle")
        .style("stroke", "gray")
        .style("fill", "white")
        .style("font-size", "78px")
        .style("font-weight", "bold")
        .text(players[0].possession + '%')

    svg.append("text")
        .attr("x", (width / 4) * 3)
        .attr("y", 110)
        .style("stroke", "gray")
        .style("fill", "white")
        .attr("text-anchor", "middle")
        .style("font-size", "48px")
        .style("font-weight", "bold")
        .text(players[1].name)

    svg.append("text")
        .attr("x", (width / 5) * 4)
        .attr("y", height / 2 + 30)
        .attr("text-anchor", "middle")
        .style("stroke", "gray")
        .style("fill", "white")
        .style("font-size", "78px")
        .style("font-weight", "bold")
        .text(players[1].possession + '%')

    svg.append("text")
        .attr("x", (width / 2))
        .attr("y", 430)
        .style("stroke", "gray")
        .style("fill", "white")
        .attr("text-anchor", "middle")
        .style("font-size", "48px")
        .style("font-weight", "bold")
        .text('branch')

    svg.append("text")
        .attr("x", (width / 2))
        .attr("y", 500)
        .style("stroke", "gray")
        .style("fill", "white")
        .attr("text-anchor", "middle")
        .style("font-size", "48px")
        .style("font-weight", "bold")
        .text(name)
})

