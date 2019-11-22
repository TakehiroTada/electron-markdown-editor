import styled from "styled-components"

export function HeadSize(size: number, baseSize = 12) {
	return (baseSize + (4 * size)) + "px"
}