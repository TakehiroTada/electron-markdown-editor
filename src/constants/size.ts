import styled from "styled-components"

export function HeadSize(size: number) {
	const BASESIZE: number = 12
	return (BASESIZE + (4 * size)) + "px"
}