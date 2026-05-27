#!/usr/bin/env bash
# Simulates crucible CLI output for demo recording (no interactive TTY)

BOLD='\033[1m'
DIM='\033[2m'
GREEN='\033[32m'
CYAN='\033[36m'
YELLOW='\033[33m'
WHITE='\033[97m'
GRAY='\033[90m'
RESET='\033[0m'
BGBLACK='\033[40m'

p() { printf "%b\n" "$*"; }
delay() { sleep "${1:-0.06}"; }

# Simulate typing the command
printf "${GRAY}\$${RESET} "
sleep 0.4
text="npm create crucible@latest volta-studio"
for (( i=0; i<${#text}; i++ )); do
  printf "%s" "${text:$i:1}"
  sleep 0.045
done
echo
sleep 0.6

# intro
p ""
p "${BGBLACK}${WHITE}  crucible  ${RESET}"
p ""
sleep 0.4

# project name
p "${GRAY}│${RESET}"
p "${CYAN}◇${RESET}  Project directory name"
p "${GRAY}│${RESET}  ${WHITE}volta-studio${RESET}"
p "${GRAY}│${RESET}"
delay 0.5

# framework
p "${CYAN}◇${RESET}  Framework"
p "${GRAY}│${RESET}  ${WHITE}Next.js 14${RESET}  ${GRAY}App Router, SSR, API routes${RESET}"
p "${GRAY}│${RESET}"
delay 0.5

# ui lib
p "${CYAN}◇${RESET}  UI library"
p "${GRAY}│${RESET}  ${WHITE}shadcn/ui${RESET}  ${GRAY}Radix + Tailwind component system${RESET}"
p "${GRAY}│${RESET}"
delay 0.5

# brand name
p "${CYAN}◇${RESET}  Brand name"
p "${GRAY}│${RESET}  ${WHITE}Volta Studio${RESET}"
p "${GRAY}│${RESET}"
delay 0.4

# tagline
p "${CYAN}◇${RESET}  Tagline (hero headline)"
p "${GRAY}│${RESET}  ${WHITE}Every frame needs a sound.${RESET}"
p "${GRAY}│${RESET}"
delay 0.4

# industry
p "${CYAN}◇${RESET}  Industry"
p "${GRAY}│${RESET}  ${WHITE}Music / Audio Studio${RESET}"
p "${GRAY}│${RESET}"
delay 0.4

# city
p "${CYAN}◇${RESET}  City / Location"
p "${GRAY}│${RESET}  ${WHITE}Bandung${RESET}"
p "${GRAY}│${RESET}"
delay 0.4

# colors
p "${CYAN}◇${RESET}  Primary color (hex)"
p "${GRAY}│${RESET}  ${WHITE}#0A0A0B${RESET}"
p "${GRAY}│${RESET}"
delay 0.3

p "${CYAN}◇${RESET}  Accent color (hex)"
p "${GRAY}│${RESET}  ${WHITE}#D4A574${RESET}"
p "${GRAY}│${RESET}"
delay 0.3

# domain
p "${CYAN}◇${RESET}  Domain (for OG meta)"
p "${GRAY}│${RESET}  ${WHITE}voltastudio.com${RESET}"
p "${GRAY}│${RESET}"
delay 0.4

# email
p "${CYAN}◇${RESET}  Contact email"
p "${GRAY}│${RESET}  ${WHITE}hello@voltastudio.com${RESET}"
p "${GRAY}│${RESET}"
delay 0.3

# spinner
for s in "◒" "◓" "◐" "◑" "◒" "◓"; do
  printf "\r${YELLOW}${s}${RESET}  Generating project..."
  sleep 0.18
done
printf "\r${GREEN}◆${RESET}  ${BOLD}Project generated.${RESET}      \n"

p "${GRAY}│${RESET}"
delay 0.5

# next steps box
p "${GRAY}┌─────────────────────────────────────────────────┐${RESET}"
p "${GRAY}│${RESET} ${BOLD}${WHITE}Next steps${RESET}                                       ${GRAY}│${RESET}"
p "${GRAY}│${RESET}                                                 ${GRAY}│${RESET}"
p "${GRAY}│${RESET}  ${CYAN}cd volta-studio${RESET}                                 ${GRAY}│${RESET}"
p "${GRAY}│${RESET}  ${CYAN}pnpm install${RESET}                                    ${GRAY}│${RESET}"
p "${GRAY}│${RESET}                                                 ${GRAY}│${RESET}"
p "${GRAY}│${RESET}  ${DIM}Then fill in:${RESET}                                    ${GRAY}│${RESET}"
p "${GRAY}│${RESET}    ${WHITE}DESIGN.md${RESET}      ${GRAY}→ complete color/type system${RESET}   ${GRAY}│${RESET}"
p "${GRAY}│${RESET}    ${WHITE}src/lib/${RESET}        ${GRAY}→ add your real content${RESET}        ${GRAY}│${RESET}"
p "${GRAY}│${RESET}    ${WHITE}GUARDRAILS.md${RESET}  ${GRAY}→ fills itself as you build${RESET}    ${GRAY}│${RESET}"
p "${GRAY}│${RESET}                                                 ${GRAY}│${RESET}"
p "${GRAY}│${RESET}  ${CYAN}pnpm dev${RESET}                                        ${GRAY}│${RESET}"
p "${GRAY}└─────────────────────────────────────────────────┘${RESET}"
p ""
delay 0.3

p "${GREEN}└${RESET}  ${GREEN}${BOLD}✓${RESET} ${BOLD}Volta Studio${RESET} — nextjs + shadcn/ui scaffold ready. Build something real."
p ""
delay 1.5
