// / making a football pitch with general dimensions from http://en.wikipedia.org/wiki/Association_football_pitch#Other_markings

const pi = Math.PI

const width = 115 * 7
const height = 74 * 7

const svg = d3.select('body').append('svg').attr('class', 'pitch').attr('height', height + 20)
    .attr('width', width + 20)
    .style('background', 'green')

const corner = d3.svg.arc()
    .innerRadius(6)
    .outerRadius(7)
    .startAngle(0) // converting from degs to radians
    .endAngle(90 * (pi / 180)) // just radians

const field = svg.append('rect').attr('height', height)
    .attr('width', width)
    .attr('fill', 'transparent')
    .attr('stroke', 'white')
    .attr('x', 10)
    .attr('y', 10)

svg.append('rect')
    .attr('height', 44 * 7)
    .attr('width', 18 * 7)
    .attr('y', 15 * 7 + 10)
    .attr('x', 10)
    .attr('fill', 'green')
    .attr('stroke', 'white')

svg.append('rect')
    .attr('height', 20 * 7)
    .attr('width', 8 * 7)
    .attr('y', 27 * 7 + 10)
    .attr('x', 10)
    .attr('fill', 'green')
    .attr('stroke', 'white')

// centerline of the pitch
svg.append('line')
    .attr('x1', width / 2 + 10)
    .attr('x2', width / 2 + 10)
    .attr('y1', 10)
    .attr('y2', height + 10)
    .attr('stroke', 'white')

// center circle
svg.append('circle')
    .attr('r', 70)
    .attr('cx', width / 2 + 10)
    .attr('cy', height / 2 + 10)
    .attr('fill', 'transparent')
    .attr('stroke', 'white')

svg.append('circle')
    .attr('r', 4)
    .attr('cx', width / 2 + 10)
    .attr('cy', height / 2 + 10)
    .attr('fill', 'black')
    .attr('stroke', 'white')

svg.append('circle')
    .attr('r', 4)
    .attr('cx', 12 * 7 + 10)
    .attr('cy', height / 2 + 10)
    .attr('fill', 'black')
    .attr('stroke', 'white')

svg.append('circle')
    .attr('r', 7 * 22)
    .attr('cx', 10)
    .attr('cy', height / 2 + 10)
    .attr('fill', 'transparent')
    .attr('stroke', 'white')

svg.append('circle')
    .attr('r', 70)
    .attr('cx', 12 * 7 + 10)
    .attr('cy', height / 2 + 10)
    .attr('fill', 'transparent')
    .attr('stroke', 'white')

svg.append('circle')
    .attr('r', 7)
    .attr('stroke', 'white')
    .attr('cx', 10)
    .attr('cy', 10)
    .attr('fill', 'transparent')

// adding the corner arc to the bottom left
svg.append('path')
    .attr('d', corner)
    .attr('transform', 'translate(' + 10 + ',' + (10 + 74 * 7) + ')')
    .attr('stroke', 'white')

const vis = d3.select('body').append('svg')

const arc = d3.svg.arc()
    .innerRadius(65)
    .outerRadius(70)
    .startAngle(0) // converting from degs to radians
    .endAngle(1.57) // just radians

